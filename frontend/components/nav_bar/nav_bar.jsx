import React from 'react';
import {Link, withRouter, Router} from 'react-router';

const forceLogout = (router) => {
  return router.replace("/");
};

const sessionBar = (currentUser,logout) => (
  <div className="session-bar">
    <Link className="home-link" to="/campaignindex">Home</Link>
    <div className="greeting-container">
      <div className="greeting">• status •</div>
    </div>
    <button className="logout-button" onClick={logout}>Log Out</button>
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
    return sessionBar(currentUser,logout);
  }

  return null;
};

export default withRouter(NavBar);
