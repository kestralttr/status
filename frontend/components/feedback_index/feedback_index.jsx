import React from 'react';
import {withRouter} from 'react-router';

class FeedbackIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parentPostingId: null
    };
    this.renderFeedback = this.renderFeedback.bind(this);
    this.generateFeedbackForm = this.generateFeedbackForm.bind(this);
  }

  componentWillUnmount() {
    return(
      this.setState({parentPostingId: null})
    );
  }

  generateFeedbackForm(e) {
    e.preventDefault();
    this.props.router.push("/feedbackform");
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
            <span className="feedback-author">{feedback_item.creator_name[0].toUpperCase().concat(feedback_item.creator_name.slice(1))}{apos} Feedback:</span><br></br>
            <span className="feedback-text">{feedback_item.comments}</span>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div>
        <h2 className="feedback-list-title">Feedback</h2>
        <button className="new-feedback-button" disabled={!this.props.postingDetail} onClick={this.generateFeedbackForm}>New</button>
          {this.renderFeedback(this.props.feedbackIndex)}
      </div>
    );
  }

}

export default withRouter(FeedbackIndex);
