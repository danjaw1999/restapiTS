import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { TodosService } from '../shared/todos.service';
import { getTodo, getTodoSuccess } from './todos.actions';


@Injectable()
export class TodoEffects {
    loadTodo$ = createEffect(() => this.actions$.pipe(
        ofType(getTodo),
        // map((idTodo) => idTodo.id),
        mergeMap(({id}) => this.todosService.fetchTodo(id)
        .pipe(
            map(todo => getTodoSuccess({todo})),
            catchError(() => EMPTY)
        ))
    ))
    constructor(
        private actions$: Actions, private todosService: TodosService
    ){}
}