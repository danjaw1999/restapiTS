import * as fromRouter from '@ngrx/router-store';
import { createSelector, createFeatureSelector } from '@ngrx/store';

import { RouterStateUrl } from 'src/app/custom-route-serializer';

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}
 
export const selectRouter = createFeatureSelector<State, fromRouter.RouterReducerState<RouterStateUrl>>('router');
  
export const getCurrentRouteState = createSelector(
  selectRouter,
  ({state}) => !!state ? state : undefined
);

export const getCurrentRouteId = createSelector(
  getCurrentRouteState,
  (state) => state.params.id  
);

