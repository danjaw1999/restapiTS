import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Post } from '../shared/post.model';

export const selectPosts = createFeatureSelector<Post[]>('posts');

export const getOnePost = (id: number) =>
  createSelector(selectPosts, (posts: Post[]) => posts.find((postEl) => postEl.id === +id)
  );
