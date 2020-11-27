import { createReducer, on } from '@ngrx/store';

import { Post } from '../shared/post.model';

import { getPostsSucces, getPostSuccess } from './post.actions';

export const initialState = [];
 
const _postsReducer = createReducer<Post[]>(
  initialState,
  on(getPostsSucces, (state, {posts}) => [...posts]),
  on(getPostSuccess, (state, {post}) => [post])
);
 
export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
