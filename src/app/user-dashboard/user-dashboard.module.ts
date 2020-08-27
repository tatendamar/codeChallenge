import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { ManageComponent } from './component/manage/manage.component';
import { StoriesService } from './services/stories.service';
import { StoreModule } from '@ngrx/store';
import * as fromStoriesState from './+state';
import { STORIES_FEATURE_KEY, storiesReducer } from './+state/stories.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoriesEffects } from './+state/stories.effects';
import { StoryAddComponent } from './component/story-add/story-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoryComponent } from './component/story/story.component';


@NgModule({
  declarations: [ManageComponent, StoryAddComponent, StoryComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    StoreModule.forFeature(STORIES_FEATURE_KEY, storiesReducer),
    EffectsModule.forFeature([StoriesEffects]),
    ReactiveFormsModule
  ],
  providers: [
    StoriesService
  ],
  exports: [ManageComponent, StoryAddComponent]
})
export class UserDashboardModule { }
