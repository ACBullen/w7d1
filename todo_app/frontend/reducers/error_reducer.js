import * as ErrorActions from "../actions/error_actions";
import merge from 'lodash/merge';

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  // debugger;
  switch (action.type){
    case ErrorActions.CLEAR_ERRORS:
      return [];
    case ErrorActions.RECEIVE_ERRORS:
      return state.concat(action.errors);
    default:
      return state;
  }

};

export default errorsReducer;
