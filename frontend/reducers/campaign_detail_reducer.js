import {RECEIVE_CAMPAIGN, CREATE_CAMPAIGN, RECEIVE_CAMPAIGN_ERRORS} from '../actions/campaign_actions';
import {merge} from 'lodash';

const _defaultState = {
  campaign: null,
  errors: []
};

const CampaignDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CAMPAIGN:
      newState["campaign"] = action.campaign;
      newState["errors"] = [];
      console.log("campaignDetail newState:", newState);
      return newState;
    case RECEIVE_CAMPAIGN_ERRORS:
      newState["campaign"] = null;
      newState["errors"] = action.errors;
      return newState;
    default:
      return state;
  }

};

export default CampaignDetailReducer;
