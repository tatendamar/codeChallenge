import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StoriesEffects } from './stories.effects';

describe('StoriesEffects', () => {
  let actions$: Observable<any>;
  let effects: StoriesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StoriesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StoriesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
