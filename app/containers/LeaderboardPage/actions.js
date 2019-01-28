/*
 *
 * LeaderboardPage actions
 *
 */

import { 
  LOAD_LEADERBOARD,
  LOAD_LEADERBOARD_SUCCESS,
  LOAD_LEADERBOARD_ERROR,
} from './constants';


export function loadLeaderboardStatus() {
  return {
    type: LOAD_LEADERBOARD,
  };
}

export function leaderboardLoaded(players) {
  return {
    type: LOAD_LEADERBOARD_SUCCESS,
    players,
  };
}

export function leaderboardLoadingError(error) {
  return {
    type: LOAD_LEADERBOARD_ERROR,
    error,
  };
}