import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../posts/shared/post.model';




@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}


  fetchPosts() {
    const posts = 'https://jsonplaceholder.typicode.com/posts/';
    return this.http.get<Post[]>(posts);
  }
}

