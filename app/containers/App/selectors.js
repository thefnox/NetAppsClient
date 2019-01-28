/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRouter = state => state.get('router');

const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, globalState => globalState.get('currentUser'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectIsAuthed = () =>
  createSelector(selectGlobal, globalState => globalState.get('authed'));

const makeSelectUserData = () =>
  createSelector(selectGlobal, globalState => globalState.get('userData'));

export {
  selectGlobal,
  selectRouter,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectIsAuthed,
  makeSelectUserData,
};
