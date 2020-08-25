import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth';
import { JwtService } from './jwt.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:3000/api/v1";
  decodeToken: any;
  helper = new JwtHelperService();
  redirectUrl: string;
  isLoggedIn: boolean = false;



  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
    private router: Router
  ) { }


  login({ email, password, admin }): Observable<any> {
    return this.http.post(`${this.authUrl}/signin`, {
      email: email,
      password: password,
      admin: admin
    }).pipe(
      map(response => {
        const data = Object.assign({}, response);


        if (data) {
          return {
            id: data['id'],
            firstName: data['firstName'],
            lastName: data['lastName'],
            role: admin ? 'admin' : 'user',
            token: data['token']
          };
        }

      }),
      tap(user => {
        this.setAuth(user);
        this.decodeToken = this.helper.decodeToken(user.token);
        this.redirect();
      })
    )
  }

  private redirect(): void {
    this.router.navigate([this.redirectUrl]); //use the stored url here
  }

  private setAuth(user) {
    this.jwtService.setToken(user.token);
  }

  logged() {
    return this.jwtService.hasValidAccessToken();
  }

}
