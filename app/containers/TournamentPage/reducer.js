/*
 *
 * LeaderboardPage reducer
 *
 */

import { fromJS } from 'immutable';

import { 
  LOAD_TOURNAMENTS,
  LOAD_TOURNAMENTS_SUCCESS,
  LOAD_TOURNAMENTS_ERROR,
} from './constants';

export const initialState = fromJS({
  tournaments: [],
  error: false
});

function leaderboardPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TOURNAMENTS:
      return state
        .set('loading', true)
        .set('error', false)
    case LOAD_TOURNAMENTS_SUCCESS:
      return state
        .set('loading', false)
        .set('tournaments', action.tournaments);
    case LOAD_TOURNAMENTS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default leaderboardPageReducer;
