import {RECEIVE_CAMPAIGNS, RECEIVE_ERRORS} from '../actions/campaign_actions';
import {merge} from 'lodash';

const _defaultState = {
  campaigns: [],
  errors: []
};

const CampaignIndexReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CAMPAIGNS:
      console.log(action.campaigns);
      newState["campaigns"] = action.campaigns;
      newState["errors"] = [];
      console.log("newState in reducer:");
      console.log(newState);
      return newState;
    case RECEIVE_ERRORS:
      newState["campaigns"] = null;
      newState["errors"] = action.errors;
      return newState;
    default:
      return state;
  }
};

export default CampaignIndexReducer;
