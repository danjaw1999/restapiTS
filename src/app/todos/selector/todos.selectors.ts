import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Todo } from '../shared/todo.model';

export const selectTodos = createFeatureSelector<Todo[]>('todos');

export const getOneTodo = (id: number) =>
  createSelector(selectTodos, (todos: Todo[]) =>
    todos.find((data) => data.id === +id)
  );
