import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { PostService } from './../shared/posts.service';

import {
  getPost,
  getPosts,
  getPostsError,
  getPostsSucces,
  getPostSuccess,
} from './post.actions';

@Injectable()
export class PostsEffect {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPosts),
      mergeMap(() => {
        return this.postsService.fetchPosts().pipe(
          map((posts) => getPostsSucces({ posts })),
          catchError((error) => {
            getPostsError({ error });
            return EMPTY;
          })
        );
      })
    )
  );
  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPost),
      mergeMap(({ id }) =>
        this.postsService.fetchPost(id).pipe(
          map((post) => getPostSuccess({ post })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private postsService: PostService) {}
}
