import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tournamentPage state domain
 */

const selectTournamentsPageDomain = state =>
  state.get('tournamentsPage', initialState);

const makeSelectTournaments = () =>
  createSelector(selectTournamentsPageDomain, state => state.get('tournaments'));

const makeSelectLoading = () =>
  createSelector(selectTournamentsPageDomain, state => state.get('loading'));

const makeSelectError = () =>
  createSelector(selectTournamentsPageDomain, state => state.get('error'));

const makeSelectTournamentsPage = () =>
  createSelector(selectTournamentsPageDomain, substate => substate.toJS());

export {makeSelectTournamentsPage, selectTournamentsPageDomain, makeSelectError, makeSelectTournaments, makeSelectLoading };
