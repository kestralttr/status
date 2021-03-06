import React from 'react';
import {Link, withRouter} from 'react-router';

class FeedbackForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: "",
      link_url: "",
      creator_id: props.currentUser.id,
      posting_id: props.postingDetail.id,
      creator_name: props.currentUser.username
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modal = this.modal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.comments) {
      return;
    }
    const feedback = {
      comments: this.state.comments,
      link_url: this.state.link_url,
      creator_id: this.state.creator_id,
      posting_id: this.state.posting_id,
      creator_name: this.state.creator_name
    };
    this.props.createFeedback({feedback});
    this.props.router.push(`/campaigns/${this.props.campaignDetail.id}`);
  }

  renderErrors() {
    if (this.props.errors.length === 0) {
      return(<br></br>);
    }
    return(
      <ul>
        {this.props.errors.map((error,i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  modal() {
    return(
      <div>
        <div className='feedback-form-modal-background'></div>
        <div className="feedback-form-modal">
          <div className="feedback-form-header">
            <h1>New Feedback</h1>
            <Link to={`/campaigns/${this.props.campaignDetail.id}`}
              className="feedback-form-close-button">Close</Link>
          </div>
          {this.renderErrors()}
          <form>
            <span>Feedback:</span><br></br>
            <textarea className="feedback-form-input"
              id="feedback-form-comments"
              rows="10"
              cols="1"
              value={this.state.comments}
              onChange={this.update("comments")}>
            </textarea> <br></br>
          <div className="feedback-form-submit-button"
              type="submit"
              onClick={this.handleSubmit}>
              Create!
            </div>
          </form>
        </div>
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.modal()}
      </div>
    );
  }

}

export default withRouter(FeedbackForm);
