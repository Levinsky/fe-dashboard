import axios from 'axios';
import * as OverviewActions from './Overview.action.types';

export const fetchMovies = () => (dispatch) => {
  const moviesUrl = 'http://localhost:3000/movies';

  dispatch({type: OverviewActions.IS_LOADING_MOVIES, payload: { }});

  axios.get(moviesUrl).then(result => {
    console.log(result);
    dispatch({type: OverviewActions.FETCH_MOVIES_RESULTS_SUCCESS, payload: { result: result.data }});
  });
};