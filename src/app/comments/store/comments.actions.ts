import { createAction, props } from '@ngrx/store';

import { Comment } from './../shared/comment.model';

export const getComments = createAction('[Comments Component] Get Comments');
export const getCommentsSuccess = createAction(
  '[Comments Component] Get Comments Success',
  props<{ comments: Comment[] }>()
);
export const getCommentsError = createAction(
  '[Comments Component] Get Comments Error',
  props<{ error: any }>()
);
export const getComment = createAction(
  '[Comments Component] Get Comment',
  props<{ id: number }>()
);
export const getCommentSuccess = createAction(
  '[Comments Component] Get Comment Success',
  props<{ comment: Comment }>()
);
export const getCommentError = createAction(
  '[Comments Component] Get Comment Failed',
  props<{ error: any }>()
);
export const getComentsById = createAction(
  '[Coments Component] Get Comments',
  props<{ id: number }>()
);
