import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { JwtService } from './shared/services/jwt.service';

import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontEnd-coding';
  helper = new JwtHelperService();

  constructor(private authService: AuthService, private jwtService: JwtService) {
  }

  ngOnInit(): void {
    const token = this.jwtService.getToken();
    this.authService.decodeToken = this.helper.decodeToken(token);
  }
}
