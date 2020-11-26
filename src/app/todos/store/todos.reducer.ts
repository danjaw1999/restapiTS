import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { Todo } from './../shared/todo.model';
import { getTodosSuccess, getTodoSuccess } from './todos.actions';

export const initialState = [];

const _todosReducer = createReducer<Todo[]>(
    initialState,
    on(getTodosSuccess, (state, {todos} ) => [...todos]),
    on(getTodoSuccess, (state, {todo}) => [todo])
)



export function todosReducer(state, action){
    return _todosReducer(state, action)
}
export interface State {
    router: RouterReducerState<any>;
  }
    
  export const reducers: ActionReducerMap<State> = {
    router: routerReducer
  };
