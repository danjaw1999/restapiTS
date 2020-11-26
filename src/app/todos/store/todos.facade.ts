import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { getOneTodo, selectTodos } from '../selector/todos.selectors';
import { getTodo, getTodos } from './todos.actions';

@Injectable({
  providedIn: 'root',
})
export class TodosFacade {
  todos$ = this.store.pipe(select(selectTodos));
  todo$ = this.getTodo();

  constructor(private store: Store<any>) {}

  getTodos() {
    this.store.dispatch(getTodos());
  }

  getTodo() {
    return  this.store.pipe(select(getOneTodo(1)));


    // this.store.dispatch(getTodo({ id }));
  }
}
