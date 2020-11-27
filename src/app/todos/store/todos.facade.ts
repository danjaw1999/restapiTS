import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, mergeMap, take, tap } from 'rxjs/operators';
import { getCurrentRouteId } from 'src/app/core/selectors/route.selectors';

import { getOneTodo, selectTodos } from '../selector/todos.selectors';

import { getTodo, getTodos } from './todos.actions';

@Injectable({
  providedIn: 'root',
})
export class TodosFacade {
  todos$ = this.store.pipe(select(selectTodos));
  todo$ = this.getTodo();
  id: number;

  constructor(private store: Store<any>) { }

  getTodos() {
    this.store.dispatch(getTodos());
  }

  getTodo() {
    return this.store.pipe(
      select(getCurrentRouteId),
      // tap((currentId) => console.log('aa', currentId)),
      mergeMap((id) => {
        this.id = id;
        return this.store.pipe(
          select(getOneTodo(id)),
        )
      }),
      tap((data) => {
        if (!data) {
          this.store.dispatch(getTodo({id: this.id}));
        }
        return data;
      }),
      filter(data => !!data),
      take(1)
    );
  }
}
