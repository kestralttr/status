export const RECEIVE_EXECUTIONS = "RECEIVE_EXECUTIONS";
export const RECEIVE_EXECUTION = "RECEIVE_EXECUTION";
export const REQUEST_EXECUTIONS = "REQUEST_EXECUTIONS";
export const CLEAR_EXECUTIONS = "CLEAR_EXECUTIONS";
export const REQUEST_EXECUTION = "REQUEST_EXECUTION";
export const CREATE_EXECUTION = "CREATE_EXECUTION";
export const RECEIVE_EXECUTION_ERRORS = "RECEIVE_EXECUTION_ERRORS";
export const CLEAR_EXECUTION = "CLEAR_EXECUTION";

export const receiveExecutions = (executions) => ({
  type: RECEIVE_EXECUTIONS,
  executions: executions
});

export const receiveExecution = (execution) => ({
  type: RECEIVE_EXECUTION,
  execution: execution
});

export const requestExecutions = (campaignId, mediaType) => ({
  type: REQUEST_EXECUTIONS,
  campaignId: campaignId,
  mediaType: mediaType
});

export const clearExecutions = () => ({
  type: CLEAR_EXECUTIONS
});

export const requestExecution = (id) => ({
  type: REQUEST_EXECUTION,
  id: id
});

export const clearExecution = () => ({
  type: CLEAR_EXECUTION
});

export const createExecution = (execution) => ({
  type: CREATE_EXECUTION,
  execution: execution
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_EXECUTION_ERRORS,
  errors: errors
});
