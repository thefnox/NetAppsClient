import { fromJS } from 'immutable';
import leaderboardPageReducer from '../reducer';

describe('leaderboardPageReducer', () => {
  it('returns the initial state', () => {
    expect(leaderboardPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
