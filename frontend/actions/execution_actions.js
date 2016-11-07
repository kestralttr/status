export const RECEIVE_EXECUTIONS = "RECEIVE_EXECUTIONS";
export const RECEIVE_EXECUTION = "RECEIVE_EXECUTION";
export const REQUEST_EXECUTIONS = "REQUEST_EXECUTIONS";
export const REQUEST_EXECUTION = "REQUEST_EXECUTION";
export const CREATE_EXECUTION = "CREATE_EXECUTION";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

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

export const requestExecution = (id, campaignId, mediaType) => ({
  type: REQUEST_EXECUTION,
  campaignId: campaignId,
  mediaType: mediaType,
  id: id
});

export const createExecution = (execution) => ({
  type: CREATE_EXECUTION,
  execution: execution
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors
});