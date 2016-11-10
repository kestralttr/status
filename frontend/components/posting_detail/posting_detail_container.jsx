import {connect} from 'react-redux';
import PostingDetail from './posting_detail';
import {requestPosting} from '../../actions/posting_actions';

const mapStateToProps = state => {
  return({
    postingDetail: state.postingDetail.posting,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  requestPosting: (id) => dispatch(requestPosting(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostingDetail);
