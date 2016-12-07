export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_ERRORS";

export const requestUser = (id) => ({
  type: REQUEST_USER,
  id: id
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user: user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors: errors
});
