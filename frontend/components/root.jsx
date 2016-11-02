import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import GreetingsContainer from './greeting/greeting_container';

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
      replace('/');
    }
  };

// NOT WORKING
  const _redirectToLogin = () => {
    this.props.router.push("/login");
  };

  return (<Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
    </Router>
  </Provider>
  );
};
export default Root;
