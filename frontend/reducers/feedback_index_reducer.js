import {RECEIVE_FEEDBACK, RECEIVE_FEEDBACK_ERRORS} from '../actions/feedback_actions';
import {merge} from 'lodash';

const _defaultState = {
  feedback: null,
  errors: []
};

const FeedbackIndexReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_FEEDBACK:
      newState["feedback"] = action.feedback;
      newState["errors"] = [];
      return newState;
    case RECEIVE_FEEDBACK_ERRORS:
      newState["feedback"] = null;
      newState["errors"] = action.errors;
    default:
      return state;
  }
};

export default FeedbackIndexReducer;
