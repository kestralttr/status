

export const fetchExecutions = (campaignId,mediaType,success,error) => {
  $.ajax({
    type: "GET",
    url: "api/executions",
    data: {execution: {campaignId: campaignId, mediaType: mediaType}},
    success: success,
    error: error
  });
};

export const fetchExecution = (id,success,error) => {
  $.ajax({
    type: "GET",
    url: `api/campaigns/${id}`,
    success: success,
    error: error
  });
};

export const createExecution = (execution, success, error) => {
  $.ajax({
    type: "POST",
    url: "api/executions",
    data: execution,
    success: success,
    error: error
  });
};
