import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { JwtService } from '../../services/jwt.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private jwtService: JwtService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.jwtService.destroyToken();
    this.alertService.success('Logged Out')
  }

}
