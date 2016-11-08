import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import CampaignMiddleware from './campaign_middleware';
import ExecutionMiddleware from './execution_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CampaignMiddleware,
  ExecutionMiddleware
);

export default RootMiddleware;
