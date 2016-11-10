import React from 'react';
import {Link, withRouter} from 'react-router';

class FeedbackForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: "",
      link_url: "",
      creator_id: props.currentUser.id,
      posting_id: props.postingDetail.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modal = this.modal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const feedback = {
      comments: this.state.comments,
      link_url: this.state.link_url,
      creator_id: this.state.creator_id,
      posting_id: this.state.posting_id
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
        <div className='modal-background'></div>
        <div className="modal">
          <div className="feedback-form-header">
            <h1>New Feedback</h1>
            <Link to={`/campaigns/${this.props.campaignDetail.id}`}
              className="feedback-form-close-button">Close</Link>
          </div>
          {this.renderErrors()}
          <form>
          <span>Comments:</span>
          <input className="feedback-form-input"
            type="text"
            value={this.state.comments}
            onChange={this.update("comments")}>
          </input> <br></br>
        <span>Link Url:</span>
          <input className="feedback-form-input"
            type="text"
            value={this.state.link_url}
            onChange={this.update("link_url")}>
          </input> <br></br>
        <input className="feedback-form-submit-button"
          type="submit"
          onClick={this.handleSubmit}></input>
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
