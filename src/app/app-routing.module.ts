import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'manage',
    canActivate: [AuthGuard],
    loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
