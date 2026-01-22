import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "@environments/environment";
import { UserModel } from '@core/models/User';
import { PermissionKey } from '@core/models/PermissionKey';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = environment.API_URL + "/users";

  private currentUserSubject = new BehaviorSubject<UserModel | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  setCurrentUser(user: UserModel): void {
    this.currentUserSubject.next(user);
  }

  hasPermission(permission: PermissionKey): boolean {
    return this.currentUserSubject.value?.permissions?.includes(permission) ?? false;
  }

  getUsersByParent(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.apiUrl}/by-parent`);
  }

  addUser(user: Partial<UserModel>): Observable<UserModel> {
    return this.http.post<UserModel>(this.apiUrl, user);
  }

  updateUser(user: Partial<UserModel>): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.apiUrl}/${user.id}`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  get currentUser(): UserModel | null {
    return this.currentUserSubject.value;
  }
}