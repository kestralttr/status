export const RECEIVE_CAMPAIGNS = "RECEIVE_CAMPAIGNS";
export const RECEIVE_CAMPAIGN = "RECEIVE_CAMPAIGN";
export const REQUEST_CAMPAIGNS = "REQUEST_CAMPAIGNS";
export const REQUEST_CAMPAIGN = "REQUEST_CAMPAIGN";
export const CREATE_CAMPAIGN = "CREATE_CAMPAIGN";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

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

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors
})
