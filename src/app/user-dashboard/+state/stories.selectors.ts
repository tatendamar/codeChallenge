import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoriesState, adapter, STORIES_FEATURE_KEY } from './stories.reducer';




export const selectStoryState = createFeatureSelector<StoriesState>(STORIES_FEATURE_KEY);

export const {
  selectIds,
  selectEntities,
  selectAll: getAllStories,
  selectTotal
} = adapter.getSelectors(selectStoryState);



export const selectedStory = createSelector(
  selectStoryState,
  (state: StoriesState) => state.selectedStory
);


export const storyQuery = {
  getAllStories
}
