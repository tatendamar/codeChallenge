import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../services/stories.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  list: [];

  constructor(private stories: StoriesService) { }

  ngOnInit(): void {
    this.stories.stories().subscribe(m => this.list = m);
  }

}
