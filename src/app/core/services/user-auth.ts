import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuth {
  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    const data = {
      email: email,
      password: password
    };

    this.http.post('http://localhost:5000/api/auth/login', data)
      .subscribe(response => {
        return response;
      });
  }
}
