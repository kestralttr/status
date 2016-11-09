import {connect} from 'react-redux';
import ExecutionIndex from './execution_index';
import {requestExecutions} from '../../actions/execution_actions';

const mapStateToProps = state => {
  return({
  executionIndex: state.executionIndex.executions,
  currentUser: state.session.currentUser,
  mediaType: state.campaignDetail.mediaType,
  campaignDetail: state.campaignDetail.campaign
  });
};

const mapDispatchToProps = dispatch => ({
  requestExecutions: (campaignId, mediaType) => dispatch(requestExecutions(campaignId, mediaType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExecutionIndex);
