import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stories } from 'src/app/shared/models/stories';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  storiesUrl = "http://localhost:3000/api/v1";

  constructor(private http: HttpClient) { }

  stories(): Observable<any> {
    return this.http.get(`${this.storiesUrl}/stories`).pipe(
      map(response => {
        if (!response) {
          throw new Error('failed to load');
        }

        return response
      })
    )
  }
}
