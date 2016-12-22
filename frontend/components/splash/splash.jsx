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
            <h1>Manage Advertising Campaigns Effortlessly</h1>

            <br></br><br></br><br></br>
            <Link className="splash-signup-link" to="/signup">Get Started</Link><br></br>
            <br></br><p className="adblock-warning">Since Status is built to review advertisements, please disable all ad-blocking software before use.</p>

          </div>
        </div>

        <div className="splash-instruction-background">

          <img id="info-icon" src="http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482448274/Info_1_lvjmcb.png"></img>

          <img id="diagram-1" src="http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482295335/Diagram_1_rp75bq.png"></img>
          <p id="diagram-1-text">Create and customize campaign appearance</p>

          <img id="diagram-2" src="http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482431941/Diagram_2_o0bjge.png"></img>
          <p id="diagram-2-text">View campaign content by media type</p>

          <img id="diagram-3" src="http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482443574/Diagram_3_t9bmhw.png"></img>
          <p id="diagram-3-text">Review and create advertisements</p>

          <img id="diagram-4" src="http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482444750/Diagram_4_lllsyf.png"></img>
          <p id="diagram-4-text">Update versions and add feedback</p>


        </div>

      </div>
    );
  }

}

export default withRouter(Splash);
