import { createAction, props } from '@ngrx/store';
import { Stories, Story } from '../../shared/models/stories';
import { Update } from '@ngrx/entity';

export const loadStories = createAction(
  '[Manage Stories Component] Load Stories'
);

export const loadStoriesSuccess = createAction(
  '[Manage Stories Effects] Load Stories Success',
  props<{ stories: Stories[] }>()
);


export const loadStoriesFailure = createAction(
  '[Manage Stories Effects] Load Stories Failure',
  props<{ error: any }>()
);

/**
 * * Add Story
 */
export const addStory = createAction(
  '[Manage Add Component] Add Story',
  props<{ story: Story }>()
);


export const addStorySuccess = createAction(
  '[Manage Add Effect] Add Story Success',
  props<{ story: Story }>()
);

export const addStoryFailure = createAction(
  '[Manage Story Add Effect] Add Story Failure',
  props<{ error: any }>()
);

/**
 * *View single story
 */
export const loadStory = createAction(
  '[Manage Story Component] Load Story',
  props<{ id: string }>()
);

export const loadStorySuccess = createAction(
  '[Manage Story Effect] Load Story Success',
  props<{ selectedStory: Stories }>()
);

export const loadStoryFailure = createAction(
  '[Manage Story Effect] Load Story Failure',
  props<{ error: any }>()
);


/**
 * *Update single story
 */


export const updateStorySuccess = createAction(
  '[Update Story Effect] Update Story Success',
  props<{ update: Update<Stories> }>()
);

