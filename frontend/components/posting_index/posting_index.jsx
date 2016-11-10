import React from 'react';
import PostingIndexItem from './posting_index_item';

class PostingIndex extends React.Component {

  constructor(props) {
    super(props);
    console.log("PI REACHED!!!");
    this.state = {
      parentExecutionId: null
    };
    this.renderPostings = this.renderPostings.bind(this);
    this.triggerParentExecution = this.triggerParentExecution.bind(this);
  }

  triggerParentExecution(executionDetail) {
    if (executionDetail) {
      return(this.setState({parentExecution: executionDetail}));
    }
  }

  componentWillUnmount() {
    return(
      this.setState({parentExecutionId: null})
    );
  }

  componentWillReceiveProps(nextProps) {

    if (!this.props.executionDetail && !this.props.postingIndex && nextProps.executionDetail) {
      return(
        this.setState({parentExecutionId: nextProps.executionDetail.id}),
        this.props.requestPostings(nextProps.executionDetail.id)
      );
    }
    if (this.props.executionDetail && nextProps.executionDetail.id !== this.props.executionDetail.id) {
      return(
        this.setState({parentExecutionId: nextProps.executionDetail.id}),
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
