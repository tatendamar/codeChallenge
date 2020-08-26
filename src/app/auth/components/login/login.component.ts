import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { AlertService } from 'ngx-alerts';
import { ProgressBarService } from '../../../shared/services/progress-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  check: boolean;

  constructor(
    public progressBar: ProgressBarService,
    private auth: AuthService,
    fb: FormBuilder,
    private alertService: AlertService
  ) {
    this.userForm = fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      admin: new FormControl('')
    });
  }

  ngOnInit(): void { }

  isAdmin(evt: any) {
    this.check = evt.target.checked;
    this.userForm.value.admin = this.check;
  }

  onSubmit() {
    this.progressBar.startLoading();
    this.auth.login({
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      isAdmin: this.userForm.value.admin,
    }
    ).subscribe(q => {
      this.progressBar.completeLoading();
      this.progressBar.setSuccess();
      this.alertService.success(`Logged In as ${q.firstName}`);
    },
      (error) => {
        this.progressBar.completeLoading();
        this.progressBar.setError();
        this.alertService.danger(`Failed Login`);
        console.log(error);
      }
    );
  }
}
