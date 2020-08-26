import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { JwtService } from '../../services/jwt.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import { NgProgress } from '@ngx-progressbar/core';
import { ProgressBarService } from '../../services/progress-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private progress: NgProgress,
    public progressBar: ProgressBarService,
    public authService: AuthService,
    private jwtService: JwtService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.progressBar.progressRef = this.progress.ref('progressBar');
  }

  logOut() {
    this.jwtService.destroyToken();
    this.alertService.success('Logged Out');
    this.router.navigate(['/login']);
  }

}
