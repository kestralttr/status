import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import {Link,withRouter} from 'react-router';
import SessionFormContainer from './session/session_form_container';
import SplashContainer from './splash/splash_container';


const App = ({children}) => (
  <div>
    <NavBarContainer />
    {children}
  </div>
);

export default withRouter(App);
