import {connect} from 'react-redux';
import CampaignIndex from './campaign_index';
import {values} from 'lodash';
import {requestCampaigns, deleteCampaign} from '../../actions/campaign_actions';
import {clearPosting, clearPostings} from '../../actions/posting_actions';
import {clearExecution, clearExecutions} from '../../actions/execution_actions';

const mapStateToProps = state => ({
  campaignIndex: state.campaignIndex.campaigns,
  currentUser: state.session.currentUser,
  errors: state.campaignIndex.errors
});

const mapDispatchToProps = dispatch => ({
  requestCampaigns: () => dispatch(requestCampaigns()),
  deleteCampaign: (id) => dispatch(deleteCampaign(id)),
  clearExecutions: () => dispatch(clearExecutions()),
  clearExecution: () => dispatch(clearExecution()),
  clearPostings: () => dispatch(clearPostings()),
  clearPosting: () => dispatch(clearPosting())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignIndex);
