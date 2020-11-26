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
export const getTodo = createAction(
    '[Todos Component] Get Todo', props<{id: number}>()
);
export const getTodoSuccess = createAction(
    '[Todos Component] Get Todo Success', props<{todo: Todo}>()
);
export const getTodoError = createAction(
    '[Todos Component] Get Todo Failed', props<{error: any}>()
);