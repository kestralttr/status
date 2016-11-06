import {RECEIVE_CAMPAIGN, CREATE_CAMPAIGN, RECEIVE_ERRORS} from '../actions/campaign_actions';
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
      return newState;
    case RECEIVE_ERRORS:
      newState["campaign"] = null;
      newState["errors"] = action.errors;
    default:
      return state;
  }

};

export default CampaignDetailReducer;
