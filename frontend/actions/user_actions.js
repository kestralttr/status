export const REQUEST_USERS = "REQUEST_USER";
export const RECEIVE_USERS = "RECEIVE_USER";
export const CLEAR_USERS = "CLEAR_USERS";
export const RECEIVE_USERS_ERRORS = "RECEIVE_ERRORS";

export const requestUsers = (str) => ({
  type: REQUEST_USERS,
  str: str
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users: users
});

export const clearUsers = () => ({
  type: CLEAR_USERS
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_USERS_ERRORS,
  errors: errors
});
