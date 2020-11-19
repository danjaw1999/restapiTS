import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  fetchPosts() {
    const posts = 'https://jsonplaceholder.typicode.com/posts/';
    return this.http.get(posts);
  }

  fetchTodos() {
    const todos = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get(todos);
  }
}

