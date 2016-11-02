import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import {withRouter} from 'react-router';
import SessionFormContainer from './session/session_form_container';


const App = ({children}) => (
  <div>
    <NavBarContainer />
    {children}
  </div>
);

export default withRouter(App);
