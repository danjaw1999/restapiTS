import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Comment } from './../../comments/shared/comment.model'

export const selectComments = createFeatureSelector<Comment[]>('comments');

export const getComments = (postId: number) => createSelector(
    selectComments,
    (comments: Comment[]) => {
        const a =  comments.filter(data => data.postId === +postId);
        console.log('selektor', a, comments);
        
        return comments.filter(data => data.postId === +postId)
    }
)
