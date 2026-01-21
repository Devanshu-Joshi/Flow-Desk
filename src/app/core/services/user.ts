import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "@environments/environment";
import { UserModel } from '@core/models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = environment.API_URL + "/users";

  constructor(private http: HttpClient) { }

  /** GET: all users */
  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiUrl);
  }

  /** GET: users by parent */
  getUsersByParent(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.apiUrl}/by-parent`);
  }

  /** POST: add user */
  addUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.apiUrl, user);
  }

  /** PUT: update user */
  updateUser(user: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.apiUrl}/${user.id}`, user);
  }

  /** DELETE: delete user */
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}