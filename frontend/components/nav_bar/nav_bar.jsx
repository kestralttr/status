import React from 'react';
import {Link, withRouter, Router} from 'react-router';

const forceLogout = (router) => {
  return router.replace("/");
};

const personalGreeting = (currentUser,logout) => (
  <div className="personal-greeting">
    <Link to="/campaignindex">Status</Link>
    <ul>
      <li>{currentUser.username}</li><br></br>
      <li>
        <button className="logout-button" onClick={logout}>Log Out</button>
      </li>
    </ul>
  </div>
);

const sessionLinks = () => (
  <div className="session-links">
    <Link to="/login">Log In</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign Up</Link>
  </div>
);

const NavBar = ({currentUser, logout, router}) => {
  if (currentUser) {
    return personalGreeting(currentUser,logout);
  }

  return null;
};

export default withRouter(NavBar);
