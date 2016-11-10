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
        <div className="campaign-detail-posting-detail">
          <span>{this.props.postingDetail.title}</span><br></br>
          <a href={this.props.postingDetail.link_url} /><br></br>
          <span>{this.props.postingDetail.comments}</span><br></br>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return(
      <div>
        {this.renderPostingDetail()}
      </div>
    );
  }

}

export default withRouter(PostingDetail);