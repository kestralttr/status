import {connect} from 'react-redux';
import FeedbackIndex from './feedback_index';
import {requestFeedback} from '../../actions/feedback_actions';

const mapStateToProps = state => {
  return({
    postingDetail: state.postingDetail.posting,
    feedbackIndex: state.feedbackIndex.feedback,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  requestFeedback: (postingId) => dispatch(requestFeedback(postingId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackIndex);
