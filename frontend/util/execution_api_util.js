

export const fetchExecutions = (campaignId,mediaType,success,error) => {
  $.ajax({
    type: "GET",
    url: "api/executions",
    data: {execution: {campaign_id: campaignId, media_type: mediaType}},
    success: success,
    error: error
  });
};

export const fetchExecution = (id,success,error) => {
  $.ajax({
    type: "GET",
    url: `api/executions/${id}`,
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
