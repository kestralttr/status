import React from 'react';
import PostingIndexItem from './posting_index_item';

class PostingIndex extends React.Component {

  constructor(props) {
    super(props);
    console.log("PI REACHED!!!");
    this.state = {};
    this.renderPostings = this.renderPostings.bind(this);
  }

  componentDidMount() {
    if (this.props.executionDetail) {
      return this.props.requestPostings(this.props.executionDetail.id);
    }
    return;
  }

  componentWillReceiveProps(nextProps) {
    console.log("PI nextProps:", nextProps, "PI this.props:", this.props);
    if (nextProps.executionDetail && nextProps.executionDetail !== this.props.executionDetail) {
      console.log("PI NEXTPROPS EXECUTIONDETAIL:",nextProps.executionDetail);
      return(
        this.props.requestPostings(nextProps.executionDetail.id)
      );
    }
  }

  renderPostings(postings) {
    if (postings === null || postings === []) {
      return;
    }
    return(
      <ul>
        {postings.map(posting => (
          <PostingIndexItem key={posting.id}
            requestPosting={this.props.requestPosting}
            posting={posting} />
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div>
        <ul className="postings-list">
          <li>TESTING!</li>
          {this.renderPostings(this.props.postingIndex)}
        </ul>
      </div>
    );
  }

}

export default PostingIndex;
