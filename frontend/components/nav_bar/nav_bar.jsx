import React from 'react';
import {Link} from 'react-router';


const personalGreeting = (currentUser,logout) => (
  <div className="personal-greeting">
    <h1>Status</h1>
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

const NavBar = ({currentUser, logout}) => {
  if (currentUser) {
    return personalGreeting(currentUser,logout);
  }
  return null;
};

export default NavBar;
