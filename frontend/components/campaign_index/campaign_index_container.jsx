import {connect} from 'react-redux';
import CampaignIndex from './campaign_index';
import {values} from 'lodash';

const mapStateToProps = state => ({
  campaignIndex: values(state.campaigns),
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps
)(CampaignIndex);
