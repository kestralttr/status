import {RECEIVE_POSTINGS, RECEIVE_POSTING_ERRORS} from '../actions/posting_actions';
import {merge} from 'lodash';

const _defaultState = {
  postings: null,
  errors: []
};

const PostingIndexReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_POSTINGS:
      if(action.postings === []) {
        newState["postings"] = null;
      } else {
        newState["postings"] = action.postings;
      }
      newState["errors"] = [];
      return newState;
    case RECEIVE_POSTING_ERRORS:
      newState["postings"] = null;
      newState["errors"] = action.errors;
      return newState;
    default:
      return state;
  }
};

export default PostingIndexReducer;
