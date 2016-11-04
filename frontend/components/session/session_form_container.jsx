import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, signup} from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  const guestLogin = login;

  return {
    processForm: user => dispatch(processForm(user)),
    guestLogin: user => dispatch(guestLogin(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
