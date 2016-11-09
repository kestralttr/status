import {connect} from 'react-redux';
import ExecutionDetail from './execution_detail';
import {requestExecution} from '../../actions/execution_actions';

const mapStateToProps = state => {
  return({
    executionDetail: state.executionDetail.execution,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  requestExecution: (id) => dispatch(requestExecution)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExecutionDetail);
