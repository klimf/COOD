
import { fromJS } from 'immutable';
import workPageReducer from '../reducer';

describe('workPageReducer', () => {
  it('returns the initial state', () => {
    expect(workPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
