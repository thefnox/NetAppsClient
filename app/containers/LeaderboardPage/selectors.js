import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the leaderboardPage state domain
 */

const selectLeaderboardPageDomain = state =>
  state.get('leaderboardPage', initialState);

const makeSelectPlayers = () =>
  createSelector(selectLeaderboardPageDomain, state => state.get('players'));

const makeSelectLoading = () =>
  createSelector(selectLeaderboardPageDomain, state => state.get('loading'));

const makeSelectError = () =>
  createSelector(selectLeaderboardPageDomain, state => state.get('error'));

const makeSelectLeaderboardPage = () =>
  createSelector(selectLeaderboardPageDomain, substate => substate.toJS());

export {makeSelectLeaderboardPage, selectLeaderboardPageDomain, makeSelectError, makeSelectPlayers, makeSelectLoading };
