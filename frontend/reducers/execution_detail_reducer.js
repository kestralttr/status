import {RECEIVE_EXECUTION, CLEAR_EXECUTION, RECEIVE_EXECUTION_ERRORS} from '../actions/execution_actions';
import {merge} from 'lodash';

const _defaultState = {
  execution: null,
  errors: []
};

const ExecutionDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_EXECUTION:
      newState["execution"] = action.execution;
      newState["errors"] = [];
      return newState;
    case CLEAR_EXECUTION:
      newState["execution"] = null;
      newState["errors"] = [];
      return newState;
    case RECEIVE_EXECUTION_ERRORS:
      newState["execution"] = null;
      newState["errors"] = action.errors;
      return newState;
    default:
      return newState;
  }
};

export default ExecutionDetailReducer;
