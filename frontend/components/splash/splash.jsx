import React from 'react';
import {Link,withRouter} from 'react-router';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.sessionLinks = this.sessionLinks.bind(this);
  }

  sessionLinks() {
    return(
      <div className="session-links">
        <Link to="/login">Log In</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }

  render() {
    return(
      <div className="splash">
        <img className='splash-initial-background' src="https://s14.postimg.org/kqcnjv469/colorful.jpg"/>
        <div className="splash-bar">
          <h1>• status •</h1>
          <Link className="splash-login-link" to="/login">  Log In  </Link>
        </div>
        <div className="splash-main-container">
          <div className="splash-main">
            <h1>Manage Campaigns Effortlessly</h1>
            <h2>Status tracks every last detail, so you can focus on results.</h2>
            <br></br>
            <Link className="splash-signup-link" to="/signup">Get Started</Link><br></br>
            <br></br><p className="adblock-warning">Since Status is built to review advertisements, please disable all ad-blocking software before use.</p>
            <br></br><br></br><br></br><p>Instructions below:</p>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(Splash);
