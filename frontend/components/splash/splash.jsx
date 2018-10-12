import React from 'react';
import {Link,withRouter} from 'react-router';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.sessionLinks = this.sessionLinks.bind(this);
    this.scrollToInfo = this.scrollToInfo.bind(this);
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

  scrollToInfo(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: parseInt($("#info").offset().top)
    }, 1000);
  }

  render() {
    return(
      <div className="splash">
        <div className="floating-box">

        </div>
        <img className='splash-initial-background' src="https://res.cloudinary.com/dzo2s4ovl/image/upload/v1539318649/color_background.png_fllxi6.png"/>
        <div className="splash-bar">
          <h1>• status •</h1>
          <Link className="splash-login-link" to="/login">  Log In  </Link>
        </div>

        <h1 id="main-splash-text">Manage Advertising Campaigns Effortlessly</h1>
        <Link className="splash-signup-link" to="/signup">Get Started</Link><br></br>
        <br></br><p className="adblock-warning">To ensure Status operates as intended, please disable all ad-blocking software before use.</p>
          <img
            id="info-arrow"
            onClick={this.scrollToInfo}
            src="http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482455761/arrow2_wxpbuq.png">
          </img>


        <div className="splash-instruction-background">
          <div id="info"></div>
          <h2 id="info-text">Status tracks every last detail, so you can focus on results.</h2>

          <img id="diagram-1" src="http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482295335/Diagram_1_rp75bq.png"></img>
          <p id="diagram-1-text">Create and customize campaign appearance</p>

          <img id="diagram-2" src="http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482431941/Diagram_2_o0bjge.png"></img>
          <p id="diagram-2-text">View campaign content by media type</p>

          <img id="diagram-3" src="http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482443574/Diagram_3_t9bmhw.png"></img>
          <p id="diagram-3-text">Review and create advertisements</p>

          <img id="diagram-4" src="http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482444750/Diagram_4_lllsyf.png"></img>
          <p id="diagram-4-text">Add updated versions and feedback</p>


        </div>

      </div>
    );
  }

}

export default withRouter(Splash);
