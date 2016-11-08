import {connect} from 'react-redux';
import ExecutionIndex from './execution_index';
import {requestExecutions} from '../../actions/execution_actions';

const mapStateToProps = state => {
  console.log("reached executionindexcontainer");
  return({
  executionIndex: state.executionIndex.executions,
  currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  requestExecutions: (campaignId, mediaType) => dispatch(requestExecutions(campaignId, mediaType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExecutionIndex);
