import {connect} from 'react-redux';
import ExecutionForm from './execution_form';
import {createExecution} from '../../actions/execution_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    errors: state.executionIndex.errors,
    executionIndex: state.executionIndex.executions,
    campaignDetail: state.campaignDetail.campaign,
    mediaType: state.campaignDetail.mediaType
  });
};

const mapDispatchToProps = dispatch => ({
  createExecution: (execution) => dispatch(createExecution(execution))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExecutionForm);
