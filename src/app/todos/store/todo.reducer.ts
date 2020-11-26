import { createReducer, on } from '@ngrx/store';
import { Todo } from './../shared/todo.model';
import { getTodoSuccess } from './todos.actions';

export const initialState = [];

const _todoReducer = createReducer<Todo[]>(
    initialState,
    on(getTodoSuccess, (state, {todo}) => [todo])
);

export function todoReducer(state, action){
    return _todoReducer(state, action)
}