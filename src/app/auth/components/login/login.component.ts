import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  check: boolean;

  constructor(
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
    this.alertService.info('this is an info alert');
    this.auth.login({
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      isAdmin: this.userForm.value.admin,
    }
    ).subscribe(q => {
      console.log(q.role);
      this.alertService.success(`Logged In as ${q.firstName}`);
    }
    );
  }
}
