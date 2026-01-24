import { computed, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, finalize, switchMap, shareReplay, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '@core/models/UserModel';
import { TokenService } from '@core/services/token-service/token-service';
import { PermissionKey } from '@core/models/PermissionKey';
import { toSignal } from '@angular/core/rxjs-interop';

interface LoginResponse {
  token: string;
  user?: any;
}

interface RegisterResponse {
  token: string;
  user?: any;
}

@Injectable({ providedIn: 'root' })
export class UserAuth {

  private apiUrl = 'http://localhost:3080/api/auth';


  private authInitializedSubject = new BehaviorSubject<boolean>(false);
  authInitialized$ = this.authInitializedSubject.asObservable();
  private currentUserSubject = new BehaviorSubject<UserModel | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  currentUserSignal = toSignal(this.currentUser$, { initialValue: null });

  isLoggedIn = computed(() => !!this.currentUserSignal());

  private meRequest$?: Observable<UserModel>;

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService, private tokenService: TokenService) {
    this.initAuth();

    this.tokenService.tokenCleared$.subscribe(() => {
      this.handleForcedLogout();
    });
  }

  private initAuth() {
    const token = this.tokenService.getToken();

    if (token && !this.isTokenExpired(token)) {

      this.getMe()
        .pipe(finalize(() => this.authInitializedSubject.next(true)))
        .subscribe(user => {
          this.setCurrentUser(user);
        });

    } else {
      this.clearAuth();
      this.authInitializedSubject.next(true);
    }
  }

  login(credentials: { email: string; password: string }) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(res => {
        this.tokenService.setToken(res.token);
      }),
      switchMap(() => this.getMe()),
      tap(user => {
        this.setCurrentUser(user);
      })
    );
  }

  register(payload: { name: string, email: string; password: string, parentId: number }) {
    return this.http
      .post<string>(`${this.apiUrl}/signup`, payload, { responseType: 'text' as 'json' });
  }

  getMe(): Observable<UserModel> {
    if (!this.meRequest$) {
      this.meRequest$ = this.http.get<UserModel>(`${this.apiUrl}/me`).pipe(
        shareReplay(1),
        catchError(err => {
          this.meRequest$ = undefined;
          throw err;
        })
      );
    }
    return this.meRequest$;
  }

  refreshCurrentUser() {
    return this.getMe()
      .pipe(
        tap(user => {
          this.setCurrentUser(user);
        })
      )
  }

  logout() {
    this.clearAuth();
    this.router.navigate(['/login']);
    this.toastr.success('Logout successful', 'Success');
  }

  private handleForcedLogout() {
    this.meRequest$ = undefined;
    this.setCurrentUser(null);
    this.router.navigate(['/login']);
    this.toastr.warning('Session expired. Please login again.', 'Unauthorized');
  }

  private clearAuth() {
    this.meRequest$ = undefined;
    this.setCurrentUser(null);
    this.tokenService.clearToken();
  }

  isAuthenticatedSync(): boolean {
    const token = this.tokenService.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  private decodeToken(token: string): any | null {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch {
      return null;
    }
  }

  private isTokenExpired(token: string): boolean {
    const payload = this.decodeToken(token);
    if (!payload?.exp) return true;
    return payload.exp * 1000 < Date.now();
  }

  hasPermission(permission: PermissionKey): boolean {
    return this.currentUserSubject.value?.permissions?.includes(permission) ?? false;
  }

  get currentUser(): UserModel | null {
    return this.currentUserSubject.value;
  }

  setCurrentUser(user: UserModel | null): void {
    this.currentUserSubject.next(user);
  }
}