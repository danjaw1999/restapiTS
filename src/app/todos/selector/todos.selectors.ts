import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Todo } from '../shared/todo.model';

export const selectTodos = createFeatureSelector<Todo[]>('todos');

export const getOneTodos = (id: number) =>
  createSelector(selectTodos, (todos: Todo[]) => {
    if (todos) {
      return todos.find((data) => data.id === id);
    }
  });