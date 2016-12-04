import {connect} from 'react-redux';
import CampaignDetail from './campaign_detail';
import {requestCampaign} from '../../actions/campaign_actions';
import {updateMediaType} from '../../actions/campaign_actions';
import {requestExecution, clearExecution, requestExecutions} from '../../actions/execution_actions';
import {requestPostings, clearPostings, requestPosting, clearPosting} from '../../actions/posting_actions';
import {requestFeedback, clearFeedback} from '../../actions/feedback_actions';

const mapStateToProps = state => {
  return({
    postingDetail: state.postingDetail.posting,
    campaignDetail: state.campaignDetail.campaign,
    currentUser: state.session.currentUser,
    mediaType: state.campaignDetail.mediaType,
    executionDetail: state.executionDetail.execution,
    executionIndex: state.executionIndex.executions,
    postingIndex: state.postingIndex.postings,
    feedbackIndex: state.feedbackIndex.feedback
  });
};

const mapDispatchToProps = dispatch => ({
  requestCampaign: (id) => dispatch(requestCampaign(id)),
  updateMediaType: (mediaType) => dispatch(updateMediaType(mediaType)),
  requestExecutions: (campaignId, mediaType) => dispatch(requestExecutions(campaignId, mediaType)),
  requestExecution: (id) => dispatch(requestExecution(id)),
  clearExecution: () => dispatch(clearExecution()),
  requestPostings: (executionId) => dispatch(requestPostings(executionId)),
  clearPostings: () => dispatch(clearPostings()),
  requestPosting: (id) => dispatch(requestPosting(id)),
  clearPosting: () => dispatch(clearPosting()),
  requestFeedback: () => dispatch(requestFeedback()),
  clearFeedback: () => dispatch(clearFeedback())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignDetail);
