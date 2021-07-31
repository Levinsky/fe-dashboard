import * as OverviewActions from './actions/Overview.action.types';
import cloneDeep from "lodash.clonedeep";

const defaultState = {
  isLoadingMovies: true,
  movies: [],
};

export default function overview(state = defaultState, action) {
    switch (action.type) {
      case OverviewActions.IS_LOADING_MOVIES: {

        return {
          ...cloneDeep(state),
          isLoadingMovies: true
        };
      }
      case OverviewActions.FETCH_MOVIES_RESULTS_SUCCESS: {
        const { result } = action.payload;

        return {
          ...cloneDeep(state),
          isLoadingMovies: false,
          movies: result
        };
      }
      default:
        return state;
    }
}