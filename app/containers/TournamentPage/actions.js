/*
 *
 * TournamentPage actions
 *
 */


import { 
  LOAD_TOURNAMENTS,
  LOAD_TOURNAMENTS_SUCCESS,
  LOAD_TOURNAMENTS_ERROR,
} from './constants';


export function loadTournamentsStatus() {
  return {
    type: LOAD_TOURNAMENTS,
  };
}

export function tournamentsLoaded(tournaments) {
  return {
    type: LOAD_TOURNAMENTS_SUCCESS,
    tournaments,
  };
}

export function tournamentsLoadingError(error) {
  return {
    type: LOAD_TOURNAMENTS_ERROR,
    error,
  };
}