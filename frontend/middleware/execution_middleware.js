import {REQUEST_EXECUTIONS, REQUEST_EXECUTION, CREATE_EXECUTION, receiveErrors, receiveExecutions, receiveExecution} from '../actions/execution_actions';
import {fetchExecutions, fetchExecution, createExecution} from '../util/execution_api_util';

const ExecutionMiddleware = ({getState,dispatch}) => next => action => {
  const executionsSuccess = executions => dispatch(receiveExecutions(executions));
  const executionSuccess = execution => dispatch(receiveExecution(execution));
  const createExecutionSuccess = executions => dispatch(receiveExecutions(executions));
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  console.log("execution middleware action type:", action.type);
  switch(action.type) {
    case REQUEST_EXECUTIONS:
      fetchExecutions(action.campaignId, action.mediaType, executionsSuccess, errorCallback);
      return next(action);
    case REQUEST_EXECUTION:
      fetchExecution(action.id, executionSuccess, errorCallback);
      return next(action);
    case CREATE_EXECUTION:
      createExecution(action.execution, createExecutionSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default ExecutionMiddleware;
