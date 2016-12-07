import {REQUEST_USER, receiveErrors, receiveUser} from '../../actions/user_actions';
import {requestUser} from '../../util/user_api_util';

const UserMiddleware = ({getState,dispatch}) => next => action => {
  const userSuccess = user => dispatch(receiveUser(user));
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  switch(action.type) {
    case REQUEST_USER:
      requestUser(action.id, userSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
