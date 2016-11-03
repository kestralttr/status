import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import CampaignMiddleware from './campaign_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CampaignMiddleware
);

export default RootMiddleware;
