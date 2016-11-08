import {connect} from 'react-redux';
import CampaignIndex from './campaign_index';
import {values} from 'lodash';
import {requestCampaigns} from '../../actions/campaign_actions';

const mapStateToProps = state => ({
  campaignIndex: state.campaignIndex.campaigns,
  currentUser: state.session.currentUser,
  errors: state.campaignIndex.errors
});

const mapDispatchToProps = dispatch => ({
  requestCampaigns: () => dispatch(requestCampaigns())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignIndex);
