import { createAction, props } from '@ngrx/store';
import { Post } from '../shared/post.model';

export const getPosts = createAction('[Posts Component] Get posts from cos');
export const getPostsSucces = createAction('[Posts Component] Get posts Succes', props<{posts: Post[]}>());
export const getPostsError = createAction('[Posts Component] Get posts from cos');