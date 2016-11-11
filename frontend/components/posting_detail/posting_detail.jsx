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
          <ul className="campaign-detail-posting-detail">
            <li className="campaign-detail-posting-detail-item">
              <span className="campaign-detail-posting-detail-data-title">{this.props.postingDetail.title}</span><br></br>
              <a className="campaign-detail-posting-detail-data-link" href={this.props.postingDetail.link_url}>LINK</a><br></br>{`\n`}
              <span>{this.props.postingDetail.comments}</span><br></br>
            </li>
          </ul>
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
