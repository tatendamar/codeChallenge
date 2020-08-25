import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() {
  }

  getToken(): string {
    return localStorage.getItem('JWT-Token');
  }

  setToken(token: string): void {
    localStorage.setItem('JWT-Token', token);
  }

  destroyToken(): void {
    localStorage.removeItem('JWT-Token');
  }

  hasValidAccessToken(): boolean {
    return !new JwtHelperService().isTokenExpired(this.getToken());
  }

  getTokenExpirationDate(): Date {
    return new JwtHelperService().getTokenExpirationDate(this.getToken());
  }
}
