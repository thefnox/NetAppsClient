import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the matchPage state domain
 */

const selectMatchPageDomain = state => state.get('matchPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MatchPage
 */

const makeSelectMatchPage = () =>
  createSelector(selectMatchPageDomain, substate => substate.toJS());

export default makeSelectMatchPage;
export { selectMatchPageDomain };
