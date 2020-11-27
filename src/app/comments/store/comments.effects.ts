import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CommentsService } from '../shared/comments.service';

import {
  getComments,
  getCommentsSuccess,
  getCommentsError,
  getComment,
  getCommentSuccess,
  getComentsById,
} from './comments.actions';

@Injectable()
export class CommentsEffects {
  loadComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getComments),
      mergeMap(() => {
        return this.commentsService.fetchComments().pipe(
          map((comments) => getCommentsSuccess({ comments })),
          catchError((error) => {
            getCommentsError({ error });
            return EMPTY;
          })
        );
      })
    )
  );
  loadComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getComment),
      mergeMap(({ id }) =>
        this.commentsService.fetchComment(id).pipe(
          map((comment) => getCommentSuccess({ comment })),
          catchError(() => EMPTY)
        )
      )
    )
  );
  loadCommentsToPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getComentsById),
      mergeMap(({ id }) => {
        return this.commentsService.fetchCommentsByPostId(id).pipe(
          map((comments) => getCommentsSuccess({ comments })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private commentsService: CommentsService
  ) {}
}
