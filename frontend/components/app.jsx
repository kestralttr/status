import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import {Link,withRouter} from 'react-router';
import SessionFormContainer from './session/session_form_container';


const App = ({children}) => (
  <div>
    <div className="session-links">
      <Link to="/login">Log In</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign Up</Link>
    </div>
    <NavBarContainer />
    {children}
  </div>
);

export default withRouter(App);
