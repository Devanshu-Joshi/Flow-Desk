import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './user';
import { UserModel } from '@core/models/User';
import { TokenService } from './token-service';

interface LoginResponse {
  token: string;
  user?: any; // optional user payload
}

interface RegisterResponse {
  token: string;
  user?: any;
}

@Injectable({ providedIn: 'root' })
export class UserAuth {

  private apiUrl = 'http://localhost:3080/api/auth';

  // Signals (for components)
  user = signal<UserModel | null>(null);
  isLoggedIn = signal<boolean>(false);

  // RxJS (for guards/interceptors)
  private authReadySubject = new BehaviorSubject<boolean>(false);
  authReady$ = this.authReadySubject.asObservable();

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService, private userService: UserService, private tokenService: TokenService) {
    this.initAuth();

    // 🔔 React to token cleared (e.g. 401)
    this.tokenService.tokenCleared$.subscribe(() => {
      this.handleForcedLogout();
    });
  }

  // 🔹 Runs once on app startup
  private initAuth() {
    const token = this.tokenService.getToken();

    if (token && !this.isTokenExpired(token)) {

      this.getMe()
        .pipe(finalize(() => this.authReadySubject.next(true)))
        .subscribe(user => {
          this.user.set(user);
          this.userService.setCurrentUser(user);
          this.isLoggedIn.set(true);
        });

    } else {
      this.clearAuth();
      this.authReadySubject.next(true);
    }
  }

  // 🔹 Login
  login(credentials: { email: string; password: string }) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        this.isLoggedIn.set(true);

        this.getMe().subscribe(user => {
          this.user.set(user);
          this.userService.setCurrentUser(user);
        });
      })
    );
  }

  // 🔹 Register
  register(payload: { name: string, email: string; password: string, parentId: number }) {
    return this.http
      .post<string>(`${this.apiUrl}/signup`, payload, { responseType: 'text' as 'json' });
  }

  getMe() {
    return this.http.get<any>(`${this.apiUrl}/me`);
  }

  refreshCurrentUser() {
    return this.getMe()
      .pipe(
        finalize(() => this.authReadySubject.next(true))
      )
      .subscribe(user => {
        this.user.set(user);
        this.userService.setCurrentUser(user);
        this.isLoggedIn.set(true);
      });
  }

  // 🔹 Logout
  logout() {
    this.clearAuth();
    this.user.set(null);
    this.isLoggedIn.set(false);
    this.router.navigate(['/login']);
    this.toastr.success('Logout successful', 'Success');
  }

  private handleForcedLogout() {
    this.userService.setCurrentUser(null as any);
    this.user.set(null);
    this.isLoggedIn.set(false);
    this.router.navigate(['/login']);
    this.toastr.warning('Session expired. Please login again.', 'Unauthorized');
  }

  private clearAuth() {
    this.userService.setCurrentUser(null as any);
    localStorage.removeItem('token');
    this.user.set(null);
    this.isLoggedIn.set(false);
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
}