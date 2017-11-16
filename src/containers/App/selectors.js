import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (substate) => substate.get('location').toJS()
);

export {
  makeSelectLocation
};
