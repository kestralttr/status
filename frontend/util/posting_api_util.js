

export const fetchPostings = (executionId,success,error) => {
  $.ajax({
    type: "GET",
    url: "api/postings",
    data: {posting: {execution_id: executionId}},
    success: success,
    error: error
  });
};

export const fetchPosting = (id,success,error) => {
  $.ajax({
    type: "GET",
    url: `api/postings/${id}`,
    success: success,
    error: error
  });
};

export const createPosting = (posting, success, error) => {
  $.ajax({
    type: "POST",
    url: "api/postings",
    data: posting,
    success: success,
    error: error
  });
};
