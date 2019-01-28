import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the matchRequestPage state domain
 */

const selectMatchRequestPageDomain = state =>
  state.get('matchRequestPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MatchRequestPage
 */

const makeSelectMatchRequestPage = () =>
  createSelector(selectMatchRequestPageDomain, substate => substate.toJS());

export default makeSelectMatchRequestPage;
export { selectMatchRequestPageDomain };
