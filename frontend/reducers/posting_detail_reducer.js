import {RECEIVE_POSTING, RECEIVE_POSTING_ERRORS} from '../actions/posting_actions';
import {merge} from 'lodash';

const _defaultState = {
  posting: null,
  errors: []
};

const PostingDetailReducer = (state = _defaultState, action) => {

  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_POSTING:
      newState["posting"] = action.posting;
      newState["errors"] = [];
      return newState;
    case RECEIVE_POSTING_ERRORS:
      newState["posting"] = null;
      newState["errors"] = action.errors;
      return newState;
    default:
    return newState;
  }
};

export default PostingDetailReducer;
