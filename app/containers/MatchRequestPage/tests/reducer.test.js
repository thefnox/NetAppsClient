import { fromJS } from 'immutable';
import matchRequestPageReducer from '../reducer';

describe('matchRequestPageReducer', () => {
  it('returns the initial state', () => {
    expect(matchRequestPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
