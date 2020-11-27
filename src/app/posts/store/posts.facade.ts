import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, mergeMap, take, tap } from 'rxjs/operators';

import { getCurrentRouteId } from 'src/app/core/selectors/route.selectors';
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
}
