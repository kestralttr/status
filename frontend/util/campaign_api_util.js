

export const fetchCampaigns = (success, error) => {
  $.ajax({
    type: "GET",
    url: "api/campaigns",
    success: success,
    error: error
  });
};

export const fetchCampaign = (id, success, error) => {
  $.ajax({
    type: "GET",
    url: `api/campaigns/${id}`,
    success: success,
    error: error
  });
};

export const createCampaign = (campaign, success, error) => {
  $.ajax({
    type: "POST",
    url: "api/campaigns",
    data: campaign,
    success: success,
    error: error
  });
};

export const deleteCampaign = (id, success, error) => {
  $.ajax({
    type: "DELETE",
    url: `api/campaigns/${id}`,
    success: success,
    error: error
  });
};
