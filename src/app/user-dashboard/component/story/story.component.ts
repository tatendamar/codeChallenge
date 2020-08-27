import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stories } from 'src/app/shared/models/stories';
import { ActivatedRoute, Router } from '@angular/router';
import { StoriesState } from '../../+state/stories.reducer';
import { Store, select } from '@ngrx/store';
import * as fromActions from '../../+state/stories.actions';
import { selectedStory } from '../../+state/stories.selectors';
import { Update } from '@ngrx/entity';
import { updateStorySuccess } from '../../+state/stories.actions';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  story$: Observable<Stories>;
  storyModel: any = {};


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<StoriesState>
  ) { }

  ngOnInit() {
    this.store.dispatch(
      fromActions.loadStory({ id: this.route.snapshot.paramMap.get('id') })
    );

    this.story$ = this.store.pipe(select(selectedStory));

    this.store.pipe(select(selectedStory)).subscribe(story =>
      this.storyModel = Object.assign(new Stories(), story)
    )
  }
  accept() {

  }

  reject() {
  }

}
