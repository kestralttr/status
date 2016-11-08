import {RECEIVE_EXECUTIONS, RECEIVE_EXECUTION_ERRORS} from '../actions/execution_actions';
import {merge} from 'lodash';

const _defaultState = {
  executions: null,
  errors: []
};

const ExecutionIndexReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_EXECUTIONS:
      if (action.executions === []) {
        newState["executions"] = null;
      } else {
        newState["executions"] = action.executions;
      }
      newState["errors"] = [];
      console.log("executionIndex newState:", newState);
      return newState;
    case RECEIVE_EXECUTION_ERRORS:
      newState["executions"] = state.executions;
      newState["errors"] = action.errors;
      return newState;
    default:
      return state;
  }
};

export default ExecutionIndexReducer;
