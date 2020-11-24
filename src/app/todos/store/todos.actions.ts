import { createAction, props } from "@ngrx/store";
import { Todo } from "../shared/todo.model";

export const getTodos = createAction(
    '[Todos Component] Get Todos'
);
export const getTodosSuccess = createAction(
    '[Todos Component] Get Todos Success', props<{todos: Todo[]}>()
);
export const getTodosError = createAction(
    '[Todos Component] Get Todos Failed', props<{error: any}>()
);