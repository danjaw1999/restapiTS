import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Comment } from './comment.model';


@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}


  fetchComments() {
    const comments = 'https://jsonplaceholder.typicode.com/comments/';
    return this.http.get<Comment[]>(comments);
  }
  
  fetchComment(id: number) {
    const action = `https://jsonplaceholder.typicode.com/comments/${id}`;
    return this.http.get<Comment>(action);
  }
}

