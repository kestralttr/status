import {connect} from 'react-redux';
import CampaignDetail from './campaign_detail';
import {requestCampaign} from '../../actions/campaign_actions';
import {updateMediaType} from '../../actions/campaign_actions';
import {requestExecution, requestExecutions} from '../../actions/execution_actions';

const mapStateToProps = state => {
  return({
    postingDetail: state.postingDetail.posting,
    campaignDetail: state.campaignDetail.campaign,
    currentUser: state.session.currentUser,
    mediaType: state.campaignDetail.mediaType,
    executionDetail: state.executionDetail.execution,
    executionIndex: state.executionIndex.executions
  });
};

const mapDispatchToProps = dispatch => ({
  requestCampaign: (id) => dispatch(requestCampaign(id)),
  updateMediaType: (mediaType) => dispatch(updateMediaType(mediaType)),
  requestExecutions: (campaignId, mediaType) => dispatch(requestExecutions(campaignId, mediaType)),
  requestExecution: (id) => dispatch(requestExecution(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignDetail);
