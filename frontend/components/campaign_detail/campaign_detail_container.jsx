import {connect} from 'react-redux';
import CampaignDetail from './campaign_detail';
import {requestCampaign} from '../../actions/campaign_actions';

const mapStateToProps = state => ({
  campaignDetail: state.campaignDetail.campaign,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestCampaign: (id) => dispatch(requestCampaign(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignDetail);
