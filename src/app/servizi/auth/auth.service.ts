import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apyKey = 'AIzaSyC8bcyih0h7T7AAxcb35rhDt7oCIVKbV5g';
  signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apyKey}`;
  signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apyKey}`
  constructor(private http: HttpClient) { }

  signUp(body: {}) {
    return this.http.post(this.signUpUrl, body)
  };

  signIn(body: {}) {
    return this.http.post(this.signInUrl, body)
  };
}
