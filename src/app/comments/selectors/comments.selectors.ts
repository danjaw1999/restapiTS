import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectComments = createFeatureSelector<Comment[]>('comments');

export const getOneComment = (id: number) =>
  createSelector(selectComments, (comments: Comment[]) => {
    if (comments) {
      return comments.find((comment) => console.log(comment));
    }
  });
