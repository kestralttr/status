import {connect} from 'react-redux';
import PostingIndex from './posting_index';
import {requestPostings, requestPosting} from '../../actions/posting_actions';

const mapStateToProps = state => {
  return({
    postingIndex: state.postingIndex.postings,
    currentUser: state.session.currentUser,
    executionDetail: state.executionDetail.execution
  });
};

const mapDispatchToProps = dispatch => ({
  requestPostings: (executionId) => dispatch(requestPostings(executionId)),
  requestPosting: (id) => dispatch(requestPosting(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostingIndex);
