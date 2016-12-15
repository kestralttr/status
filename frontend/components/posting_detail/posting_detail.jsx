import React from 'react';
import {Link, withRouter} from 'react-router';
import PostingDetailContainer from '../posting_detail/posting_detail_container';

class PostingDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.renderPostingDetail.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.postingDetail && nextProps.postingDetail.id !== (this.props.postingDetail ? this.props.postingDetail.id : "0")) {
      return(this.props.requestPosting(nextProps.postingDetail.id));
    }
  }

  renderPostingDetail() {
    if (this.props.postingDetail) {
      return(
        <img src={this.props.postingDetail.image_url}>

        </img>
      );
    } else {
      return null;
    }
  }

  render() {
    return(
      <div>
        <h2 className="campaign-detail-posting-detail-title">Posting Details</h2>
        {this.renderPostingDetail()}
      </div>
    );
  }

}

export default withRouter(PostingDetail);
