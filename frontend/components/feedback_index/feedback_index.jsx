import React from 'react';

class FeedbackIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parentPostingId: null
    };
    this.renderFeedback = this.renderFeedback.bind(this);
  }

  componentWillUnmount() {
    return(
      this.setState({parentPostingId: null})
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.parentPostingId === null && nextProps.postingDetail) {
      return(
        this.setState({parentPostingId: nextProps.postingDetail.id}),
        this.props.requestFeedback(nextProps.postingDetail.id)
      );
    }
    if (this.state.parentPostingId && nextProps.postingDetail && this.state.parentPostingId !== nextProps.postingDetail.id) {
      return(
        this.setState({parentPostingId: nextProps.postingDetail.id}),
        this.props.requestFeedback(nextProps.postingDetail.id)
      );
    }
    if (this.state.parentPostingId && nextProps.postingDetail === null) {
      return(
        this.setState({parentPostingId: null})
      );
    }
  }

  renderFeedback(feedback) {
    if (feedback === null || feedback === [] || this.state.parentPostingId === null) {
      return;
    }
    let apos = "'s";
    return(
      <ul className="feedback-list">
        {feedback.map(feedback_item => (
          <li key={feedback_item.id}>
            <span>{feedback_item.creator_name[0].toUpperCase().concat(feedback_item.creator_name.slice(1))}{apos} Feedback:</span><br></br>
            <span>{feedback_item.comments}</span>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div>
        <h2 className="feedback-list-title">Feedback</h2>
          {this.renderFeedback(this.props.feedbackIndex)}
      </div>
    );
  }

}

export default FeedbackIndex;
