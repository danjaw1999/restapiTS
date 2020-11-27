import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, mergeMap, take, tap } from 'rxjs/operators';
import { getOneComment } from 'src/app/comments/selectors/comments.selectors';
import {
  getComentsById,
  getCommentsSuccess,
} from 'src/app/comments/store/comments.actions';

import { getCurrentRouteId } from 'src/app/core/selectors/route.selectors';
import { getComments, selectComments } from '../selectors/comments.selector';
import { getOnePost, selectPosts } from '../selectors/posts.selectors';

import { getPost, getPosts } from './post.actions';

@Injectable({ providedIn: 'root' })
export class PostsFacade {
  posts$ = this.store.pipe(select(selectPosts));
  post$ = this.getPost();
  id: number;

  constructor(private store: Store<any>) {}
  
  getPosts() {
    this.store.dispatch(getPosts());
  }

  getPost() {
    return this.store.pipe(
      select(getCurrentRouteId),
      mergeMap((id) => {
        this.id = id;
        return this.store.pipe(select(getOnePost(id)));
      }),
      tap((data) => {
        if (!data) {
          this.store.dispatch(getPost({ id: this.id }));
        }
        return data;
      }),
      filter((data) => !!data),
      take(1)
    );
  }

  getCommentsToPost() {
    return this.store.pipe(
      select(getCurrentRouteId),
      mergeMap((id: number) => {
        this.id = +id;
        return this.store.pipe(select(getComments(this.id)));
      }),
      tap((data) => {
        if (!data.length) {
          this.store.dispatch(getComentsById({ id: this.id }));
        }
        return data;
      }),
      filter((data) => !!data.length),
      take(1)
    );
  }
}
