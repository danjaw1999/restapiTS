import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../todos/shared/todo.model';


@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}


  fetchTodos() {
    const todos = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get<Todo[]>(todos);
  }
}
