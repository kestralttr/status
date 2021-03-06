import {connect} from 'react-redux';
import CampaignForm from './campaign_form';
import {createCampaign} from '../../actions/campaign_actions';
import {requestUsers, clearUsers} from '../../actions/user_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    errors: state.campaignIndex.errors,
    campaignIndex: state.campaignIndex.campaigns,
    userIndex: state.userIndex.users
  });
};

const mapDispatchToProps = dispatch => ({
  createCampaign: (campaign) => dispatch(createCampaign(campaign)),
  requestUsers: (str) => dispatch(requestUsers(str)),
  clearUsers: () => dispatch(clearUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignForm);
