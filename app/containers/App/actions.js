import { 
  LOAD_USER_STATUS,
  LOAD_USER_STATUS_SUCCESS,
  LOAD_USER_STATUS_ERROR,
  EVENT_POLLING_START,
  EVENT_POLLING_STOP,
} from './constants';

export function loadUserStatus() {
  return {
    type: LOAD_USER_STATUS,
  };
}

export function userLoaded(authed, userData) {
  return {
    type: LOAD_USER_STATUS_SUCCESS,
    authed,
    userData,
  };
}

export function userLoadingError(error) {
  return {
    type: LOAD_USER_STATUS_ERROR,
    error,
  };
}

export function startEventPolling() {
  return {
    type: EVENT_POLLING_START,
  };
}

export function stopEventPolling() {
  return {
    type: EVENT_POLLING_STOP,
  };
} 