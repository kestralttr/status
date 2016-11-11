import {REQUEST_CAMPAIGNS, REQUEST_CAMPAIGN, CREATE_CAMPAIGN, DELETE_CAMPAIGN, receiveErrors, receiveCampaigns, receiveCampaign} from '../actions/campaign_actions';
import {fetchCampaigns, fetchCampaign, createCampaign, deleteCampaign} from '../util/campaign_api_util';

const CampaignMiddleware = ({getState,dispatch}) => next => action => {
  const campaignsSuccess = campaigns => dispatch(receiveCampaigns(campaigns));
  const campaignSuccess = campaign => dispatch(receiveCampaign(campaign));
  const createCampaignSuccess = campaigns => dispatch(receiveCampaigns(campaigns));
  const deleteCampaignSuccess = campaigns => dispatch(receiveCampaigns(campaigns));
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  switch(action.type) {
    case REQUEST_CAMPAIGNS:
      fetchCampaigns(campaignsSuccess, errorCallback);
      return next(action);
    case REQUEST_CAMPAIGN:
      fetchCampaign(action.id, campaignSuccess, errorCallback);
      return next(action);
    case CREATE_CAMPAIGN:
      createCampaign(action.campaign, createCampaignSuccess, errorCallback);
      return next(action);
    case DELETE_CAMPAIGN:
      deleteCampaign(action.id, deleteCampaignSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default CampaignMiddleware;
