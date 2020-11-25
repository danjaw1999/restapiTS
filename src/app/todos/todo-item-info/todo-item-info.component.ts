import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';

import { Todo } from '../shared/todo.model';
import { Store } from '@ngrx/store';
import { getOneTodos } from '../selector/todos.selectors';

@Component({
  selector: 'app-todo-item-info',
  templateUrl: './todo-item-info.component.html',
  styleUrls: ['./todo-item-info.component.scss'],
})
export class TodoItemInfoComponent {
  todo$: Observable<Todo>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    // this.todo$ = this.activatedRoute.data.pipe(
    //   map((data: { todo: Todo }) => data.todo)
    // );
    this.todo$ = activatedRoute.params.pipe(
      map((data: { id: number }) => +data.id),
      // tap((d) => console.log(d)),
      mergeMap((id) => this.store.select(getOneTodos(id)))
      // tap((d) => console.log(d))
    );
  }
}
