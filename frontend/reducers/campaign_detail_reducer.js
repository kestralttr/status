import {RECEIVE_CAMPAIGN, CREATE_CAMPAIGN, RECEIVE_CAMPAIGN_ERRORS, UPDATE_MEDIA_TYPE} from '../actions/campaign_actions';
import {merge} from 'lodash';

const _defaultState = {
  campaign: null,
  errors: [],
  mediaType: null
};

const CampaignDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CAMPAIGN:
      newState["campaign"] = action.campaign;
      newState["errors"] = [];
      return newState;
    case UPDATE_MEDIA_TYPE:
      newState["mediaType"] = action.mediaType;
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
