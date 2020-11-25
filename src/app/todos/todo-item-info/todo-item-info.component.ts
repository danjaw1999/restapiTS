import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';

import { Todo } from '../shared/todo.model';
import { Store } from '@ngrx/store';
import { TodosService } from './../shared/todos.service';
import { getOneTodos } from '../selector/todos.selectors';

@Component({
  selector: 'app-todo-item-info',
  templateUrl: './todo-item-info.component.html',
  styleUrls: ['./todo-item-info.component.scss'],
})
export class TodoItemInfoComponent {
  todo$: Observable<Todo>;
  idTodo: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private todosService: TodosService
  ) {
    this.todo$ = this.activatedRoute.params.pipe(
      map((data: { id: number }) => {
        this.idTodo = +data.id;
        return +data.id;
      }),
      mergeMap((id) => this.store.select(getOneTodos(id))),
      mergeMap((todo) => {
        if (!todo) {
          return this.todosService.fetchTodo(this.idTodo);
        }
        return [todo];
      })
    );
  }
}
