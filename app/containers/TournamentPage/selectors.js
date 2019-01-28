import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tournamentPage state domain
 */

const selectTournamentPageDomain = state =>
  state.get('tournamentPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TournamentPage
 */

const makeSelectTournamentPage = () =>
  createSelector(selectTournamentPageDomain, substate => substate.toJS());

export default makeSelectTournamentPage;
export { selectTournamentPageDomain };
