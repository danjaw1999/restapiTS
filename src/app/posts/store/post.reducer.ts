import { createReducer, on } from '@ngrx/store';
import { Post } from '../shared/post.model';

 
export const initialState = [{id: 1, userId: 1, title: 'title', body: 'body'}];
 
const _postsReducer = createReducer<Post[]>(
  initialState,
);
 
export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
