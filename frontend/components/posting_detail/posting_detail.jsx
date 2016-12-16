import React from 'react';
import {Link, withRouter} from 'react-router';
import PostingDetailContainer from '../posting_detail/posting_detail_container';

class PostingDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.renderPostingDetail = this.renderPostingDetail.bind(this);
    this.backgroundImage = this.backgroundImage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.postingDetail && nextProps.postingDetail.id !== (this.props.postingDetail ? this.props.postingDetail.id : "0")) {
      return(this.props.requestPosting(nextProps.postingDetail.id));
    }
  }

  backgroundImage() {
    if (this.props.postingDetail.image_url && this.props.postingDetail.image_url !== "") {
      return({backgroundImage: `url(${this.props.postingDetail.image_url})`});
    }
  }

  renderPostingDetail() {
    if (this.props.postingDetail) {
      return(
        <div className="posting-image"
          src={this.props.postingDetail.image_url}
          style={this.backgroundImage()}>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return(
      <div className="posting-image-container">

        {this.renderPostingDetail()}
      </div>
    );
  }

}

export default withRouter(PostingDetail);
