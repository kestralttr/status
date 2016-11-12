import React from 'react';
import PostingIndexItem from './posting_index_item';

class PostingIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parentExecutionId: null
    };
    this.renderPostings = this.renderPostings.bind(this);
    this.triggerParentExecution = this.triggerParentExecution.bind(this);
    this.renderFirstPostingDetail = this.renderFirstPostingDetail.bind(this);
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
    if (this.props.executionDetail && nextProps.executionDetail && nextProps.executionDetail.id !== this.props.executionDetail.id) {
      return(
        this.setState({parentExecutionId: nextProps.executionDetail.id}),
        this.props.requestPostings(nextProps.executionDetail.id)
      );
    }
    if (!nextProps.executionDetail) {
      return(
        this.setState({parentExecutionId: null}),
        this.props.requestPostings(0)
      );
    }
    if (nextProps.postingIndex !== this.props.postingIndex) {
      return(
        this.renderFirstPostingDetail(nextProps.postingIndex)
      );
    }
  }

  renderPostings(postings) {
    if (postings === null || postings === [] || this.state.parentExecutionId === null) {
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

  renderFirstPostingDetail(postings) {
    if (!Array.isArray(postings) || postings === [] || !postings[0]) {
      return(
        this.props.requestPosting(0)
      );
    }
    return(
      this.props.requestPosting(postings[0].id)
    );
  }

  render() {
    return(
      <div className="postings-list">
        <h2>Postings</h2>
        <ul>
          {this.renderPostings(this.props.postingIndex)}
        </ul>
      </div>
    );
  }

}

export default PostingIndex;
