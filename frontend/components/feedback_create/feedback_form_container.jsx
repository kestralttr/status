import {connect} from 'react-redux';
import FeedbackForm from './feedback_form';
import {createFeedback} from '../../actions/feedback_actions';

const mapStateToProps = state => {
  return({
    currentUser: state.session.currentUser,
    errors: state.feedbackIndex.errors,
    feedbackIndex: state.feedbackIndex.feedback,
    postingDetail: state.postingDetail.posting,
    campaignDetail: state.campaignDetail.campaign
  });
};

const mapDispatchToProps = dispatch => ({
  createFeedback: (feedback) => dispatch(createFeedback(feedback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackForm);
