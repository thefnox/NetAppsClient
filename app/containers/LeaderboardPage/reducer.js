/*
 *
 * LeaderboardPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';

import { 
  LOAD_LEADERBOARD,
  LOAD_LEADERBOARD_SUCCESS,
  LOAD_LEADERBOARD_ERROR,
} from './constants';

export const initialState = fromJS({
  players: [],
  error: false
});

function leaderboardPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LEADERBOARD:
      return state
        .set('loading', true)
        .set('error', false)
    case LOAD_LEADERBOARD_SUCCESS:
      return state
        .set('loading', false)
        .set('players', action.players);
    case LOAD_LEADERBOARD_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default leaderboardPageReducer;
