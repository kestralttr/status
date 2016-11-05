import {connect} from 'react-redux';
import CampaignForm from './campaign_form';
import {createCampaign} from '../../actions/campaign_actions';

const mapStateToProps = ({campaignDetail}) => ({
  errors: campaignDetail.errors
});

const mapDispatchToProps = dispatch => ({
  createCampaign: (campaign) => dispatch(createCampaign)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignForm);
