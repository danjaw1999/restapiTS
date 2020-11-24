import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TodosService } from '../shared/todos.service';
import { getTodos, getTodosSuccess } from './todos.actions';

 
@Injectable()
export class TodosEffects {
 loadTodos$ = createEffect(() => this.actions$.pipe(
     ofType(getTodos),
     mergeMap(() => this.todosService.fetchTodos()
     .pipe(
         map(todos => getTodosSuccess({todos})),
         catchError(() => EMPTY)
     ))
 ));
 
  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) {}
}