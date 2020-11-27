import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { TodosService } from 'src/app/todos/shared/todos.service';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosResolverService implements Resolve<Todo[]> {
  constructor(private todosService: TodosService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Todo[] | Observable<Todo[]> | Promise<Todo[]> {
    return this.todosService.fetchTodos();
  }
}
