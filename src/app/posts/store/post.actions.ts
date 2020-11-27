import { createAction, props } from '@ngrx/store';

import { Post } from '../shared/post.model';


export const getPosts = createAction('[Posts Component] Get posts');
export const getPostsSucces = createAction('[Posts Component] Get posts Success', props<{posts: Post[]}>());
export const getPostsError = createAction('[Posts Component] Get posts Error', props<{error: any}>());
export const getPost = createAction('[Posts Component] Get Post', props<{id: number}>());
export const getPostSuccess = createAction('[Posts Component] Get Post Success', props<{post: Post}>());
export const getPostFailed = createAction('[Posts Component] Get Post Failed', props<{error: any}>());



