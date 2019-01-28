/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_USER_STATUS = 'netapps/App/LOAD_USER_STATUS';
export const LOAD_USER_STATUS_SUCCESS = 'netapps/App/LOAD_USER_STATUS_SUCCESS';
export const LOAD_USER_STATUS_ERROR = 'netapps/App/LOAD_USER_STATUS_ERROR';
export const EVENT_POLLING_START = 'netapps/App/EVENT_POLLING_START';
export const EVENT_POLLING_STOP = 'netapps/App/EVENT_POLLING_STOP';