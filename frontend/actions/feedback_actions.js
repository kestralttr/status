export const RECEIVE_FEEDBACK = "RECEIVE_FEEDBACK";
export const REQUEST_FEEDBACK = "REQUEST_FEEDBACK";
export const CREATE_FEEDBACK = "CREATE_FEEDBACK";
export const CLEAR_FEEDBACK = "CLEAR_FEEDBACK";
export const RECEIVE_FEEDBACK_ERRORS = "RECEIVE_FEEDBACK_ERRORS";

export const receiveFeedback = (feedback) => ({
  type: RECEIVE_FEEDBACK,
  feedback: feedback
});

export const requestFeedback = (postingId) => ({
  type: REQUEST_FEEDBACK,
  postingId: postingId
});

export const createFeedback = (feedback) => ({
  type: CREATE_FEEDBACK,
  feedback: feedback
});

export const clearFeedback = () => ({
  type: CLEAR_FEEDBACK
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_FEEDBACK_ERRORS,
  errors: errors
});
