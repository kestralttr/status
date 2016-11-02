import React from 'react';
import GreetingsContainer from './greeting/greeting_container';
import {withRouter} from 'react-router';


const App = ({children}) => (
  <div className='app'>
    <h1>Status</h1>
    <GreetingsContainer />
    {children}
  </div>
);

export default withRouter(App);
