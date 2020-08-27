import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './component/manage/manage.component';
import { AuthGuard } from '../shared/guard/auth.guard';
import { StoryAddComponent } from './component/story-add/story-add.component';
import { StoryComponent } from './component/story/story.component';


const routes: Routes = [
  {
    path: 'list',
    canActivate: [AuthGuard],
    component: ManageComponent,
  },
  {
    path: 'add',
    component: StoryAddComponent
  },
  {
    path: 'get/:id',
    component: StoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class UserDashboardRoutingModule { }
