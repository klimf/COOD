import { createSelector } from 'reselect';

/**
 * Direct selector to the workPage state domain
 */
const selectWorkPageDomain = () => (state) => state.get('workPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by WorkPage
 */

const makeSelectWorkPage = () => createSelector(
  selectWorkPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectWorkPage;
export {
  selectWorkPageDomain,
};
