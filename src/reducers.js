import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
// import { authReducer } from './containers/Auth/reducer';
// import navBarReducer from './containers/NavBar/reducer';
// import usersListReducer from 'containers/UsersList/reducer';
// import configMenuAreaReducer from 'containers/Pages/ConfigPage/ConfigMenuArea/reducer';
/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null
});

/**
 * Merge route into the global application state
 */
 function routeReducer(state = routeInitialState, action) {
     switch (action.type) {
         /* istanbul ignore next */
         case LOCATION_CHANGE:
             return state.merge({
                 location: action.payload,
             });
         default:
             return state;
     }
 }
/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    form: formReducer,
    route: routeReducer,
    ...asyncReducers,
  });
}
