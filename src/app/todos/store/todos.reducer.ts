import { createReducer, on } from '@ngrx/store';
import { Todo } from './../shared/todo.model';
import { getTodosSuccess } from './todos.actions';

export const initialState = [];

const _todosReducer = createReducer<Todo[]>(
    initialState,
    on(getTodosSuccess, (state, {todos} ) => [...todos])
)

export function todosReducer(state, action){
    return _todosReducer(state, action)
}
