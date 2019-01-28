import { fromJS } from 'immutable';
import matchPageReducer from '../reducer';

describe('matchPageReducer', () => {
  it('returns the initial state', () => {
    expect(matchPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
