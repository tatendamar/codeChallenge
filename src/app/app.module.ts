import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { HomeComponent } from './pages/home/home.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { environment } from 'src/environments/environment';


export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [] // [storeFreeze, debug]
  : [];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    UserDashboardModule,
    StoreModule.forRoot({}, { metaReducers })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
