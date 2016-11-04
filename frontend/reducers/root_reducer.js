import {combineReducers} from 'redux';
import SessionReducer from './session_reducer.js';
import CampaignIndexReducer from './campaign_index_reducer';
import CampaignDetailReducer from './campaign_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  campaignIndex: CampaignIndexReducer,
  campaignDetail: CampaignDetailReducer
});

export default RootReducer;
