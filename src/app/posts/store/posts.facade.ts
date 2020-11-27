import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, mergeMap, take, tap } from 'rxjs/operators';
import { getComentsById, getCommentsSuccess } from 'src/app/comments/store/comments.actions';

import { getCurrentRouteId } from 'src/app/core/selectors/route.selectors';
import { getComments } from '../selectors/comments.selector';
import { getOnePost, selectPosts } from '../selectors/posts.selectors';

import { getPost, getPosts } from './post.actions';

@Injectable({ providedIn: 'root' })
export class PostsFacade {
  posts$ = this.store.pipe(select(selectPosts));
  post$ = this.getPost();
  comments$ = this.getCommentsToPost();
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
      mergeMap((id) => {
        this.id = id;     
        console.log('id',id);   
        return this.store.pipe(
          select(getComments(id))
          );
      }),
      tap((data) => {
        if (data.length === 0) {
          this.store.dispatch(getComentsById({id: this.id}));
        }
        console.log('data',data);
        
        return data;
      }),
      filter((data) => !!data),
      take(1)
    );
  }
}
