import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {

  private unAuthorizedAccessSubject = new Subject<void>();
  unAuthorizedAccess$ = this.unAuthorizedAccessSubject.asObservable();

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }

  unAuthorizedAccess(forced = false): void {
    if (forced)
      this.clearToken()
    this.unAuthorizedAccessSubject.next();
  }
}