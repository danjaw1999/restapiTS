import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Post } from '../shared/post.model';

export interface AppState {
    posts: Post[];
}

export const selectPosts = createFeatureSelector<Post[]>('posts');

export const getOnePost = (id: number) => createSelector(
    selectPosts,
    (posts: Post[]) => {
        if (posts) {
            return posts.find(postEl => postEl.id === id)
        }
    }
)