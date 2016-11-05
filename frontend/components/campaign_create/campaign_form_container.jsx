import {connect} from 'react-redux';
import CampaignForm from './campaign_form';
import {createCampaign} from '../../actions/campaign_actions';

const mapStateToProps = state => {
  console.log("campaign_form_index:", state);
  return({
    currentUser: state.session.currentUser,
    errors: state.campaignDetail.errors
  });
};

const mapDispatchToProps = dispatch => ({
  createCampaign: (campaign) => dispatch(createCampaign)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignForm);
