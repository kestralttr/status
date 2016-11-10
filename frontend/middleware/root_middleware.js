import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import CampaignMiddleware from './campaign_middleware';
import ExecutionMiddleware from './execution_middleware';
import PostingMiddleware from './posting_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CampaignMiddleware,
  ExecutionMiddleware,
  PostingMiddleware
);

export default RootMiddleware;
