/**
 * Gets the repositories of the user from Github
 */

import { all, call, put, fork, takeLatest, race, cancelled, take } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { LOAD_USER_STATUS, EVENT_POLLING_START, EVENT_POLLING_STOP } from 'containers/App/constants'
import { userLoaded, userLoadingError, startEventPolling, stopEventPolling } from 'containers/App/actions'
import { API_HOSTNAME } from 'utils/constants'
import { get } from 'utils/request'
import auth from 'utils/auth'

/**
 * Github repos request/response handler
 */
export function* getUserData() {
  // Select username from store
  const token = auth.getToken();
  const requestURL = `${API_HOSTNAME}players/me`;
  if (!token) {
    yield put(userLoaded(false, false, {}))
  }
  else {
    try {
      const response = yield call(get, requestURL)
      yield put(userLoaded(true, response.data))
      yield put(startEventPolling())
    } catch (err) {
      yield put(userLoadingError(err))
    }
  }
}

function * pollForMatches() {
  let response;
  while (true) {
    try {
      const requestURL = `${API_HOSTNAME}games/listen`;
      response = yield call(get, requestURL);
      console.log(response);
      yield put(push(`/match/${response.data.id}`));
      yield put(stopEventPolling())
      break;
    } catch (err) {
      if (yield cancelled()) {
        console.log("Event poll loop cancelled");
        break;
      }
    }
  }
}

function * watchUserData() {
  yield takeLatest(LOAD_USER_STATUS, getUserData);
}

function * watchPollData() {
  while(true) {
    yield take(EVENT_POLLING_START);
    
    yield race([
      take(EVENT_POLLING_STOP),
      fork(pollForMatches),
    ]);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* userData() {
  yield fork(getUserData);
  yield all([
    watchPollData(),
    watchUserData()
  ])
}
