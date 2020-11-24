import { createAction, props } from '@ngrx/store';
import { Post } from '../shared/post.model';

export const getPosts = createAction('[Posts Component] Get posts');
export const getPostsSucces = createAction('[Posts Component] Get posts Success', props<{posts: Post[]}>());
export const getPostsError = createAction('[Posts Component] Get posts Error', props<{error: any}>());