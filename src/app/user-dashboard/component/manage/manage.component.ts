import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../services/stories.service';
import { Stories, Story } from '../../../shared/models/stories';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromActions from '../../+state/stories.actions';
import { StoriesState } from '../../+state/stories.reducer';
import { storyQuery } from '../../+state/stories.selectors';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  stories$: Observable<Stories[] | Story[]>;

  constructor(
    private stories: StoriesService,
    private store: Store<StoriesState>) {

  }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadStories());
    this.storiesList();
  }

  storiesList() {
    this.stories$ = this.store.pipe(select(storyQuery.getAllStories));
  }
}
