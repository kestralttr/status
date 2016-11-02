import React from 'react';
import {Link, withRouter} from 'react-router';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.title = this.title.bind(this);
    this.altAuth = this.altAuth.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  renderErrors() {
    return(
      <ul>
          {this.props.errors.map((error,i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
      </ul>
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  title() {
    if (this.props.formType === 'login') {
      return(<h1 className='auth-form-login-title'>Log In</h1>)
    } else {
      return(<h1 className='auth-form-login-title'>Sign Up</h1>)
    }
  }

  altAuth() {
    if (this.props.formType === "login") {
      return <Link to="/signup">Don't have an account? Sign up!</Link>;
    } else {
      return <Link to="/login">I have an account. Log in!</Link>;
    }
  }

  render() {
    return (
      <div className='auth-form'>
        <img className='auth-form-background' src="http://wallpapers.ae/wp-content/uploads/2015/01/Gradient-Free-Blurry-Abstract-Background-Photos.png"/>
        <h1 className='auth-form-site-name'>status</h1>
        <form onSubmit={this.handleSubmit}>
          {this.title()}
          <br/>
          {this.renderErrors()}
          <div>
            <br/>
            <p className='auth-form-input-title'>Username:</p>
            <label>
              <input className="auth-form-input"
                type="text"
                value={this.state.username}
                onChange={this.update("username")}/>
            </label>
            <br/>
            <p className='auth-form-input-title'>Password:</p>
            <label>
              <input className="auth-form-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}/>
            </label>
            <br/>
            <input className="auth-form-submit-button" type="submit" value="Submit" />
          </div>
        </form>
        <div className="auth-form-alt-auth">{this.altAuth()}</div>
      </div>
    );
  }

}

export default withRouter(SessionForm);
