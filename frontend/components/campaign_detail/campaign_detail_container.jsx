import {connect} from 'react-redux';
import CampaignDetail from './campaign_detail';
import {requestCampaign} from '../../actions/campaign_actions';
import {updateMediaType} from '../../actions/campaign_actions';

const mapStateToProps = state => {
  return({
  campaignDetail: state.campaignDetail.campaign,
  currentUser: state.session.currentUser,
  mediaType: state.campaignDetail.mediaType
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
