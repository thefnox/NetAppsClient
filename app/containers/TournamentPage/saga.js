// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, fork, takeLatest } from 'redux-saga/effects'
import { LOAD_TOURNAMENTS } from './constants'
import { tournamentsLoaded, tournamentsLoadingError } from './actions'
import { API_HOSTNAME } from 'utils/constants'
import { get } from 'utils/request'

/**
 * Github repos request/response handler
 */
export function* getTournaments() {
  const requestURL = `${API_HOSTNAME}tournaments`;
  try {
    const response = yield call(get, requestURL)
    yield put(tournamentsLoaded(response.data))
  } catch (err) {
    yield put(tournamentsLoadingError(err))
  }
}


export default function* tournamentsPageSaga() {
  yield fork(getTournaments);
  yield takeLatest(LOAD_TOURNAMENTS, getTournaments);
}
