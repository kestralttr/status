
export const requestUser = (id, success, error) => {
  $.ajax({
    type: "GET",
    url: `api/users/${id}`,
    success: success,
    error: error
  });
};
