export const RECEIVE_POSTINGS = "RECEIVE_POSTINGS";
export const RECEIVE_POSTING = "RECEIVE_POSTING";
export const REQUEST_POSTINGS = "REQUEST_POSTINGS";
export const CLEAR_POSTINGS = "CLEAR_POSTINGS";
export const REQUEST_POSTING = "REQUEST_POSTING";
export const CLEAR_POSTING = "CLEAR_POSTING";
export const CREATE_POSTING = "CREATE_POSTING";
export const RECEIVE_POSTING_ERRORS = "RECEIVE_POSTING_ERRORS";

export const receivePostings = (postings) => ({
  type: RECEIVE_POSTINGS,
  postings: postings
});

export const receivePosting = (posting) => ({
  type: RECEIVE_POSTING,
  posting: posting
});

export const requestPostings = (executionId) => ({
  type: REQUEST_POSTINGS,
  executionId: executionId
});

export const clearPostings = () => ({
  type: CLEAR_POSTINGS
});

export const requestPosting = (id) => ({
  type: REQUEST_POSTING,
  id: id
});

export const clearPosting = () => ({
  type: CLEAR_POSTING
});

export const createPosting = (posting) => ({
  type: CREATE_POSTING,
  posting: posting
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_POSTING_ERRORS,
  errors: errors
});
