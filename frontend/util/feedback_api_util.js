

export const fetchFeedback = (postingId, success, error) => {
  $.ajax({
    type: "GET",
    url: "api/feedback",
    data: {feedback: {posting_id: postingId}},
    success: success,
    error: error
  });
};

export const createFeedback = (feedback, success, error) => {
  $.ajax({
    type: "POST",
    url: "api/feedback",
    data: feedback,
    success: success,
    error: error
  });
};
