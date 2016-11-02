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

  render() {
    return (
      <div className='auth-form'>
        <h1 className='auth-form-site-name'>Status</h1>
        <form onSubmit={this.handleSubmit}>
          <h1 className='auth-form-login-title'>Log In</h1>
          <br/>
          Please {this.props.formType} or {this.navLink()}
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
      </div>
    );
  }

}

export default withRouter(SessionForm);
