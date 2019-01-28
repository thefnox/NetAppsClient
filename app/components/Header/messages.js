/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'netapps.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  tournament: {
    id: `${scope}.tournament`,
    defaultMessage: 'Tournament',
  },
  leaderboards: {
    id: `${scope}.leaderboards`,
    defaultMessage: 'Leaderboards',
  },
  request: {
    id: `${scope}.request`,
    defaultMessage: 'Request',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
});
