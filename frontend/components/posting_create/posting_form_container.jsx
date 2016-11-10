import {connect} from 'react-redux';
import PostingForm from './posting_form';
import {createPosting} from '../../actions/posting_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    errors: state.postingIndex.errors,
    postingIndex: state.postingIndex.postings,
    executionDetail: state.executionDetail.execution,
    campaignDetail: state.campaignDetail.campaign
  });
};

const mapDispatchToProps = dispatch => ({
  createPosting: (posting) => dispatch(createPosting(posting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostingForm);
