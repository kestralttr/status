import React from 'react';
import {Link} from 'react-router';


const personalGreeting = (currentUser,logout) => (
  <div className="personal_greeting">
    <h2>{currentUser.username}</h2><br></br>
    <button onClick={logout}>Log Out</button>
  </div>
);

const sessionLinks = () => (
  <div className="session_links">
    <Link to="/login">Log In</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign Up</Link>
  </div>
);

const NavBar = ({currentUser, logout}) => {
  if (currentUser) {
    return personalGreeting(currentUser,logout);
  } else {
    return sessionLinks();
  }
};

export default NavBar;
