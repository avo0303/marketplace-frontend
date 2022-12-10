import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInData } from '../model/signInData';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loginEndpoint: string = 'http://localhost:8080/api/login';
  constructor(private http: HttpClient) {}

  authenticate(data: SignInData): Observable<User> {
    const formData = new FormData();
    formData.append('username', data.getUsername());
    formData.append('password', data.getPassword());
    console.log(data);
    return this.http.post<User>(this.loginEndpoint, formData, {
      withCredentials: true,
    });
  }
}
