import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StoriesService } from '../services/stories.service';
import { mergeMap, map, catchError, tap, concatMap } from 'rxjs/operators';
import * as fromStoriesActions from './stories.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class StoriesEffects {

  loadStories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStoriesActions.loadStories),
      mergeMap(() =>
        this.storiesService.stories().pipe(
          map(stories =>
            fromStoriesActions.loadStoriesSuccess({ stories })),
          catchError(error =>
            of(fromStoriesActions.loadStoriesFailure({ error })))
        )
      )
    )
  );

  createStories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStoriesActions.addStory),
      mergeMap(action =>
        this.storiesService.addStory(action.story).pipe(
          map(story =>
            fromStoriesActions.addStorySuccess({ story })),
          catchError(error =>
            of(fromStoriesActions.addStoryFailure({ error })))
        )
      ),
      tap(() => this.router.navigate(['/manage/list']))
    )
  );


  loadStoriesById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStoriesActions.loadStory),
      mergeMap(action =>
        this.storiesService.storyById(action.id).pipe(
          map(story =>
            fromStoriesActions.loadStorySuccess({ selectedStory: story })),
          catchError(error =>
            of(fromStoriesActions.loadStoryFailure({ error })))
        )
      )
    )
  );


  updateProduct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromStoriesActions.updateStorySuccess),
        concatMap(action =>
          this.storiesService.updateStory(
            action.story.id,
            action.story.status
          )
        ),
        tap(() => this.router.navigate(['/mange/list']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private storiesService: StoriesService,
    private router: Router
  ) { }

}
