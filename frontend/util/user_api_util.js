
export const fetchUsers = (str, success, error) => {
  $.ajax({
    type: "GET",
    url: "api/users/index",
    data: {user: {str: str}},
    success: success,
    error: error
  });
};
