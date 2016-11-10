import {combineReducers} from 'redux';
import SessionReducer from './session_reducer.js';
import CampaignIndexReducer from './campaign_index_reducer';
import CampaignDetailReducer from './campaign_detail_reducer';
import ExecutionIndexReducer from './execution_index_reducer';
import ExecutionDetailReducer from './execution_detail_reducer';
import PostingIndexReducer from './posting_index_reducer';
import PostingDetailReducer from './posting_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  campaignIndex: CampaignIndexReducer,
  campaignDetail: CampaignDetailReducer,
  executionIndex: ExecutionIndexReducer,
  executionDetail: ExecutionDetailReducer,
  postingIndex: PostingIndexReducer,
  postingDetail: PostingDetailReducer
});

export default RootReducer;
