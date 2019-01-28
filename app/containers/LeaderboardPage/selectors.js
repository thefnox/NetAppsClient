import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the leaderboardPage state domain
 */

const selectLeaderboardPageDomain = state =>
  state.get('leaderboardPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by LeaderboardPage
 */

const makeSelectLeaderboardPage = () =>
  createSelector(selectLeaderboardPageDomain, substate => substate.toJS());

export default makeSelectLeaderboardPage;
export { selectLeaderboardPageDomain };
