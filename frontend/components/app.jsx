import React from 'react';
import GreetingsContainer from './greeting/greeting_container';
import {withRouter} from 'react-router';
import SessionFormContainer from './session/session_form_container';


const App = ({children}) => (
  <div className='app'>
    <h1>Status</h1>
    <GreetingsContainer />
    {children}
  </div>
);

export default withRouter(App);
