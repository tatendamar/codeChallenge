import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../services/stories.service';
import { Stories } from '../../../shared/models/stories';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  list$: Observable<Stories[]>;

  constructor(private stories: StoriesService) {

  }

  ngOnInit(): void {
    this.storiesList();
  }

  storiesList() {
    this.stories.stories().subscribe(m => {
      this.list$ = m;
    },
      error => {
        console.log('error', error);
      }
    );
  }
}
