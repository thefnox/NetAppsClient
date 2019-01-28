// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, fork, takeLatest } from 'redux-saga/effects'
import { LOAD_LEADERBOARD, LOAD_LEADERBOARD_SUCCESS, LOAD_LEADERBOARD_ERROR } from './constants'
import { loadLeaderboardStatus, leaderboardLoaded, leaderboardLoadingError } from './actions'
import { API_HOSTNAME } from 'utils/constants'
import { get } from 'utils/request'
import auth from 'utils/auth'

/**
 * Github repos request/response handler
 */
export function* getLeaderboard() {
  const requestURL = `${API_HOSTNAME}players`;
  try {
    const response = yield call(get, requestURL)
    yield put(leaderboardLoaded(response.data))
  } catch (err) {
    yield put(leaderboardLoadingError(err))
  }
}


export default function* leaderboardPageSaga() {
  yield fork(getLeaderboard);
  yield takeLatest(LOAD_LEADERBOARD, getLeaderboard);
}
