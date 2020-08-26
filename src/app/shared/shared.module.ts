import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from './layouts/column/column.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-alerts';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './interceptor';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgProgressModule } from '@ngx-progressbar/core';


@NgModule({
  declarations: [ColumnComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgProgressModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot({
      maxMessages: 5,
      timeout: 5000,
      position: 'right'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthService
  ],
  exports: [
    ColumnComponent
  ]
})
export class SharedModule { }
