import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { Stories, Story } from '../../shared/models/stories';
import * as StoryActions from './stories.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const STORIES_FEATURE_KEY = 'stories';

export interface StoriesState extends EntityState<Stories | Story> {
  error: any;
  selectedStory: Stories;
}

export const adapter: EntityAdapter<Stories | Story> = createEntityAdapter<Stories | Story>();

export const initialState = adapter.getInitialState({
  error: undefined,
  selectedStory: undefined
});


export const storiesReducer = createReducer(
  initialState,
  on(StoryActions.loadStoriesSuccess, (state, action) => {
    return {
      ...adapter.setAll(action.stories, state)
    };
  }),

  on(StoryActions.addStorySuccess, (state, action) => {
    return {
      ...adapter.addOne(action.story, state)
    };
  }),

  on(StoryActions.loadStorySuccess, (state, action) => {
    return {
      ...state,
      selectedStory: action.selectedStory
    }
  }),

  on(StoryActions.updateStorySuccess, (state, action) => {
    return {
      ...adapter.updateOne(
        {
          id: action.story.id,
          changes: action.story
        },
        state
      )
    };
  }),


  on(StoryActions.loadStoryFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }),

  on(StoryActions.addStoryFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),

  on(StoryActions.loadStoriesFailure, (state, action) => {
    return {
      error: action.error
    };
  }),


);


export const selectStoriesFeature = createFeatureSelector<StoriesState>(
  STORIES_FEATURE_KEY,

);

export const selectStories = createSelector(
  selectStoriesFeature,
  adapter.getSelectors().selectAll
);


export const selectError = createSelector(
  selectStoriesFeature,
  (state: StoriesState) => state.error
);
