import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Comment } from './../shared/comment.model';

export const selectComments = createFeatureSelector<Comment[]>('comments');

export const getOneComment = (id: number) =>
  createSelector(selectComments, (comments: Comment[]) => {
    if (comments) {
      return comments.find((comment) => comment.id === id);
    }
  });
