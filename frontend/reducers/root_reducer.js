import {combineReducers} from 'redux';
import SessionReducer from './session_reducer.js';
import CampaignIndexReducer from './campaign_index_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  campaignIndex: CampaignIndexReducer
});

export default RootReducer;
