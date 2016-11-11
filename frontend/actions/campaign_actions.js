export const RECEIVE_CAMPAIGNS = "RECEIVE_CAMPAIGNS";
export const RECEIVE_CAMPAIGN = "RECEIVE_CAMPAIGN";
export const REQUEST_CAMPAIGNS = "REQUEST_CAMPAIGNS";
export const REQUEST_CAMPAIGN = "REQUEST_CAMPAIGN";
export const CREATE_CAMPAIGN = "CREATE_CAMPAIGN";
export const DELETE_CAMPAIGN = "DELETE_CAMPAIGN";
export const RECEIVE_CAMPAIGN_ERRORS = "RECEIVE_CAMPAIGN_ERRORS";
export const UPDATE_MEDIA_TYPE = "UPDATE_MEDIA_TYPE";

export const receiveCampaigns = (campaigns) => ({
  type: RECEIVE_CAMPAIGNS,
  campaigns: campaigns
});

export const receiveCampaign = (campaign) => ({
  type: RECEIVE_CAMPAIGN,
  campaign: campaign
});

export const requestCampaigns = () => ({
  type: REQUEST_CAMPAIGNS
});

export const requestCampaign = (id) => ({
  type: REQUEST_CAMPAIGN,
  id: id
});

export const createCampaign = (campaign) => ({
  type: CREATE_CAMPAIGN,
  campaign: campaign
});

export const deleteCampaign = (id) => ({
  type: DELETE_CAMPAIGN,
  id: id
});

export const updateMediaType = (mediaType) => ({
  type: UPDATE_MEDIA_TYPE,
  mediaType: mediaType
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_CAMPAIGN_ERRORS,
  errors: errors
});
