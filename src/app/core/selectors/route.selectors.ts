import * as fromRouter from '@ngrx/router-store';
import { routerReducer } from '@ngrx/router-store';
import { createSelector, ActionReducerMap } from '@ngrx/store';

export interface StoreRootState {
    router: fromRouter.RouterReducerState<any>;
  }
  export const reducers: ActionReducerMap<StoreRootState> = {
    router: routerReducer,
  };
  
export const getRouterState = (state: StoreRootState) => state.router;

export const getCurrentRouteState = createSelector(
  getRouterState,
  (state: fromRouter.RouterReducerState) => {
      if(state?.state) {
          return state;
      }
      return undefined;
  }
);
export const getCurrentId = createSelector(
  getRouterState,
  (state: fromRouter.RouterReducerState) => {
      if(state?.state) {
          return state.state.params.id;
      }
      return undefined;
  }
);
