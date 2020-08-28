import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stories } from 'src/app/shared/models/stories';
import { Story } from '../../shared/models/stories';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  storiesUrl = "http://localhost:3000/api/v1";

  constructor(private http: HttpClient) { }

  stories(): Observable<Stories[]> {
    return this.http.get(`${this.storiesUrl}/stories`).pipe(
      map((response: []) => {


        const sortId = response.sort((a, b) => {
          return a['id'] - b['id']
        });

        return sortId.map(item => {
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

  addStory({
    summary,
    description,
    type,
    complexity
  }: Story): Observable<Story> {
    return this.http.post(`${this.storiesUrl}/stories`, {
      summary,
      description,
      type,
      complexity
    }).pipe(
      map(data => {

        const response = Object.assign({}, data);

        if (response) {

          return {
            id: response['id'],
            createdBy: response['createdBy'],
            summary: response['summary'],
            description: response['description'],
            type: response['description'],
            cost: response['cost'],
            complexity: response['complexity'],
            estimatedHrs: response['estimatedHrs'],
            status: response['status']
          }
        }
      })
    );
  }

  storyById(storyId: string): Observable<Stories> {
    return this.http.get(`${this.storiesUrl}/stories/${storyId}`).pipe(
      map(data => {

        const response = Object.assign({}, data);

        if (response) {

          return {
            id: response['id'],
            createdBy: response['createdBy'],
            summary: response['summary'],
            description: response['description'],
            type: response['description'],
            cost: response['cost'],
            complexity: response['complexity'],
            estimatedHrs: response['estimatedHrs'],
            status: response['status']
          };
        }
      })
    );
  }

  updateStory(
    id: string | number,
    changes: Partial<Stories>
  ): Observable<any> {
    return this.http.put(`http://localhost:3000/api/v1/stories/${id}/${changes.status}`, {
      id,
      changes: changes.status
    }).pipe(
      map(data => {

        return {
          ...data
        };
      })
    )
  }
}
