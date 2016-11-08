import {connect} from 'react-redux';
import CampaignForm from './campaign_form';
import {createCampaign} from '../../actions/campaign_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    errors: state.campaignIndex.errors,
    campaignIndex: state.campaignIndex.campaigns
  });
};

const mapDispatchToProps = dispatch => ({
  createCampaign: (campaign) => dispatch(createCampaign(campaign))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignForm);
