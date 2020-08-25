import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './component/manage/manage.component';
import { AuthGuard } from '../shared/guard/auth.guard';


const routes: Routes = [
  {
    path: 'manage',
    component: ManageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class UserDashboardRoutingModule { }
