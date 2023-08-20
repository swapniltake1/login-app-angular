import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  // calling server to generate token
  generateToken(credentials: any) {
    return this.http.post(`${this.url}/auth/login`, credentials);
  }

  // for login user
  loginUser(token: string) {
    localStorage.setItem("token", token);
  }

  // Check if user is logged in or not
  isLoggedIn(): boolean {
    return !!localStorage.getItem("token");
  }

  // logout
  logout(): void {
    localStorage.removeItem("token");
  }

  // get token
  getToken(): string | null {
    return localStorage.getItem("token");
  }
}
