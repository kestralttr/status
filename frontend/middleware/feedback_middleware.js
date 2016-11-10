import {REQUEST_FEEDBACK, CREATE_FEEDBACK, receiveErrors, receiveFeedback} from '../actions/feedback_actions';
import {fetchFeedback, createFeedback} from '../util/feedback_api_util';

const FeedbackMiddleware = ({getState, dispatch}) => next => action => {
  const feedbackSuccess = feedback => dispatch(receiveFeedback(feedback));
  const createFeedbackSuccess = feedback => dispatch(receiveFeedback(feedback));
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  switch(action.type) {
    case REQUEST_FEEDBACK:
      fetchFeedback(action.postingId, feedbackSuccess, errorCallback);
      return next(action);
    case CREATE_FEEDBACK:
      createFeedback(action.feedback, createFeedbackSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default FeedbackMiddleware;
