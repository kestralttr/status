

export const signup = (user, success, error) => {
  $.ajax({
    type: "POST",
    url: "api/users",
    data: user,
    success: success,
    error: error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    type: "POST",
    url: "api/session",
    data: user,
    success: success,
    error: error
  });
};

export const logout = (success, error) => {
  $.ajax({
    type: "DELETE",
    url: "api/session",
    success: success,
    error: error
  });
};
