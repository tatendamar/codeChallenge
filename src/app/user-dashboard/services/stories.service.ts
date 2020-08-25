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

  stories(): Observable<Stories[]> {
    return this.http.get(`${this.storiesUrl}/stories`).pipe(
      map((response: []) => {



        return response.map(item => {
          const data: Stories = {
            id: item['id'],
            createdBy: item['createdBy'],
            summary: item['summary'],
            description: item['description'],
            type: item['type'],
            cost: item['cost'],
            complexity: item['complexity'],
            estimatedHrs: item['estimatedHrs'],
            status: item['status'],
          };
          return data;
        });
      })
    )
  }
}
