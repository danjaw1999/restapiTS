import { createReducer, on } from '@ngrx/store';

import { Post } from '../shared/post.model';
import { getPostsSucces } from './post.actions';

 
export const initialState = [];
 
const _postsReducer = createReducer<Post[]>(
  initialState,
  on(getPostsSucces, (state, {posts}) => [...posts])
);
 
export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
