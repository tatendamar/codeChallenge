import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { ManageComponent } from './component/manage/manage.component';
import { StoriesService } from './services/stories.service';


@NgModule({
  declarations: [ManageComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,

  ],
  providers: [
    StoriesService
  ],
  exports: [ManageComponent]
})
export class UserDashboardModule { }
