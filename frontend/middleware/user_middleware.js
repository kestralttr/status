import {REQUEST_USERS, receiveErrors, receiveUsers} from '../actions/user_actions';
import {fetchUsers} from '../util/user_api_util';

const UserMiddleware = ({getState,dispatch}) => next => action => {
  const usersSuccess = users => dispatch(receiveUsers(users));
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  switch(action.type) {
    case REQUEST_USERS:
      fetchUsers(action.str, usersSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
