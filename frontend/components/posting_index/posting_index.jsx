import React from 'react';
import PostingIndexItem from './posting_index_item';
import {withRouter} from 'react-router';

class PostingIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parentExecutionId: null
    };
    this.renderPostings = this.renderPostings.bind(this);
    this.triggerParentExecution = this.triggerParentExecution.bind(this);
    this.renderFirstPostingDetail = this.renderFirstPostingDetail.bind(this);
    this.generatePostingForm = this.generatePostingForm.bind(this);
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

    if (!this.props.executionDetail && !this.state.parentExecutionId && !this.props.postingIndex && nextProps.executionDetail) {
      return(
        this.setState({parentExecutionId: nextProps.executionDetail.id}),
        this.props.requestPostings(nextProps.executionDetail.id)
      );
    } else
    if (this.props.executionDetail && this.props.postingIndex && nextProps.executionDetail && nextProps.executionDetail.id !== this.props.executionDetail.id) {
      return(
        this.setState({parentExecutionId: nextProps.executionDetail.id}),
        this.props.requestPostings(nextProps.executionDetail.id)
      );
    } else
    if (nextProps.executionDetail === null ) {
      return(
        this.setState({parentExecutionId: null}),
        this.props.clearPostings(),
        this.props.clearPosting()
      );
    }
    if (nextProps.postingIndex !== this.props.postingIndex) {
      return(
        this.renderFirstPostingDetail(nextProps.postingIndex)
      );
    }
  }

  renderFirstPostingDetail(postings) {
    if (!postings || !Array.isArray(postings) || postings === [] || !postings[0]) {
      return(
        this.props.clearPosting()
      );
    } else
    return(
      this.props.requestPosting(postings[0].id)
    );
  }

  renderPostings(postings) {
    if (postings === null || postings === [] || this.state.parentExecutionId === null) {
      return;
    }
    return(
      <ul>
        {postings.map(posting => (
          <PostingIndexItem key={posting.id}
            postingDetail={this.props.postingDetail}
            requestPosting={this.props.requestPosting}
            posting={posting} />
        ))}
      </ul>
    );
  }

  generatePostingForm(e) {
    e.preventDefault();
    this.props.router.push("/postingform");
  }


  render() {
    return(
      <div className="postings-list">
        <h2>Versions</h2>
        <button className="new-posting-button" disabled={!this.props.executionDetail} onClick={this.generatePostingForm}>New</button>
        <ul>
          {this.renderPostings(this.props.postingIndex)}
        </ul>
      </div>
    );
  }

}

export default withRouter(PostingIndex);
