import {REQUEST_POSTINGS, REQUEST_POSTING, CREATE_POSTING, receiveErrors, receivePostings, receivePosting} from '../actions/posting_actions';
import {fetchPostings, fetchPosting, createPosting} from '../util/posting_api_util';

const PostingMiddleware = ({getState,dispatch}) => next => action => {
  const postingsSuccess = postings => dispatch(receivePostings(postings));
  const postingSuccess = posting => dispatch(receivePosting(posting));
  const createPostingSuccess = postings => dispatch(receivePostings(postings));
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  console.log("posting middleware action type:", action.type);
  switch(action.type) {
    case REQUEST_POSTINGS:
      fetchPostings(action.executionId, postingsSuccess, errorCallback);
      return next(action);
    case REQUEST_POSTING:
      fetchPosting(action.id, postingSuccess, errorCallback);
      return next(action);
    case CREATE_POSTING:
      createPosting(action.posting, createPostingSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }

};

export default PostingMiddleware;
