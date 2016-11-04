import {RECEIVE_CURRENT_USER,RECEIVE_ERRORS,LOGOUT} from '../actions/session_actions';
import {merge} from 'lodash';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState,action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState["currentUser"] = action.currentUser;
      newState["errors"] = [];
      return newState;
    case LOGOUT:
      return _defaultState;
    case RECEIVE_ERRORS:
      newState["currentUser"] = null;
      newState["errors"] = action.errors;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
