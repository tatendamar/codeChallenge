import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StoriesState } from '../../+state/stories.reducer';
import { Store } from '@ngrx/store';
import { addStory } from '../../+state/stories.actions';
import { Stories } from 'src/app/shared/models/stories';

@Component({
  selector: 'app-story-add',
  templateUrl: './story-add.component.html',
  styleUrls: ['./story-add.component.css']
})
export class StoryAddComponent implements OnInit {
  storyForm: FormGroup;

  constructor(
    private router: Router,
    fb: FormBuilder,
    private store: Store<StoriesState>
  ) {
    this.storyForm = fb.group({
      summary: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      complexity: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    const model = {
      summary: this.storyForm.value.summary,
      description: this.storyForm.value.description,
      type: this.storyForm.value.type,
      complexity: this.storyForm.value.complexity
    };

    this.store.dispatch(
      addStory({ story: model }));
  }
}
