import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';

import { Comment } from './../../comments/shared/comment.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}


  fetchPosts() {
    const posts = 'https://jsonplaceholder.typicode.com/posts/';
    return this.http.get<Post[]>(posts);
  }
  fetchPost(id: number){
    const action = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.get<Post>(action);
  }
  fetchPostCom(id: number){
    const action = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    return this.http.get<Comment[]>(action);
  }
}

