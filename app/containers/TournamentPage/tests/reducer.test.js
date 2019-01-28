import { fromJS } from 'immutable';
import tournamentPageReducer from '../reducer';

describe('tournamentPageReducer', () => {
  it('returns the initial state', () => {
    expect(tournamentPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
