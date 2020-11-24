import { createAction, props } from "@ngrx/store";

import { Comment } from './../shared/comment.model';

export const getComments = createAction(
    '[Comments Component] Get Comment'
);
export const getCommentsSuccess = createAction(
    '[Comments Component] Get Comment Success', props<{comments: Comment[]}>()
);
export const getCommentsError = createAction(
    '[Comments Component] Get Comment Error', props<{error: any}>()
);