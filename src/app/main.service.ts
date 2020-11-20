import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todos/shared/todo.model';
import { Post } from './posts/shared/post.model';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  fetchPosts() {
    const posts = 'https://jsonplaceholder.typicode.com/posts/';
    return this.http.get<Post[]>(posts);
  }

  fetchTodos() {
    const todos = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get<Todo[]>(todos);
  }
}

