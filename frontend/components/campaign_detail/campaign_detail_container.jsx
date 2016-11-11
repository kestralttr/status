import {connect} from 'react-redux';
import CampaignDetail from './campaign_detail';
import {requestCampaign} from '../../actions/campaign_actions';
import {updateMediaType} from '../../actions/campaign_actions';

const mapStateToProps = state => {
  return({
    postingDetail: state.postingDetail.posting,
    campaignDetail: state.campaignDetail.campaign,
    currentUser: state.session.currentUser,
    mediaType: state.campaignDetail.mediaType,
    executionDetail: state.executionDetail.execution
  });
};

const mapDispatchToProps = dispatch => ({
  requestCampaign: (id) => dispatch(requestCampaign(id)),
  updateMediaType: (mediaType) => dispatch(updateMediaType(mediaType))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignDetail);
