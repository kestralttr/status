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
      <div>
        {this.sessionLinks()}
      </div>
    );
  }

}

export default withRouter(Splash);
