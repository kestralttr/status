import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, IndexRedirect, hashHistory} from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashContainer from './splash/splash_container';
import CampaignIndexContainer from './campaign_index/campaign_index_container';
import {requestCampaigns} from '../actions/campaign_actions';
import CampaignDetailContainer from './campaign_detail/campaign_detail_container';
import CampaignFormContainer from './campaign_create/campaign_form_container';
import {requestExecutions} from '../actions/execution_actions';
import ExecutionFormContainer from './execution_create/execution_form_container';

const Root = ({store}) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/campaignindex');
    }
  };

  const _requestCampaigns = () => {
    const currentUser = store.getState().session.currentUser;
    return store.dispatch(requestCampaigns());
  };

  const _requestExecutions = () => {
    store.dispatch(requestExecutions(4,"TV"));
  };

  return (<Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SplashContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="campaignindex" component={CampaignIndexContainer} onEnter={_ensureLoggedIn}>
          <Route path="/campaignform" component={CampaignFormContainer} onEnter={_ensureLoggedIn} />
        </Route>
        <Route path="campaigns/:campaignId" component={CampaignDetailContainer} onEnter={_ensureLoggedIn}>
          <Route path="/executionform" component={ExecutionFormContainer} onEnter={_ensureLoggedIn}/>
        </Route>
  </Route>
  </Router>
  </Provider>
  );
};
export default Root;
