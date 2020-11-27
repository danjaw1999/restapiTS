import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { TodosService } from './todos.service';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoResolverService implements Resolve<Todo> {
  constructor(private todosService: TodosService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Todo | Observable<Todo> | Promise<Todo> {
    const { id } = route.params;
    return this.todosService.fetchTodo(id);
  }
}
