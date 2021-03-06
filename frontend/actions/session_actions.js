export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const login = (user) => ({
  type: LOGIN,
  user: user
});

export const logout = () => ({
  type: LOGOUT
});

export const signup = (user) => ({
  type: SIGNUP,
  user: user
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
});
