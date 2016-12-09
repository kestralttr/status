import {RECEIVE_USERS, CLEAR_USERS, RECEIVE_USERS_ERRORS} from '../actions/user_actions';
import {merge} from 'lodash';

const _defaultState = {
  users: [],
  errors: []
};

const UserIndexReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USERS:
      newState["users"] = action.users;
      newState["errors"] = [];
      return newState;
    case CLEAR_USERS:
      return _defaultState;
    case RECEIVE_USERS_ERRORS:
      newState["users"] = state.users;
      newState["errors"] = action.errors;
      return newState;
    default:
      return state;
  }
};

export default UserIndexReducer;
