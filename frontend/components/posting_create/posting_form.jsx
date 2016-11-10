import React from 'react';
import {Link, withRouter} from 'react-router';

class PostingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      comments: "",
      link_url: "",
      execution_id: props.executionDetail.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modal = this.modal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const posting = {
      title: this.state.title,
      comments: this.state.comments,
      link_url: this.state.link_url,
      execution_id: this.state.execution_id
    };
    this.props.createPosting({posting});
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
          <div className="posting-form-header">
            <h1>New Posting</h1>
            <Link to={`/campaigns/${this.props.campaignDetail.id}`}
              className="posting-form-close-button">Close</Link>
          </div>
          {this.renderErrors()}
          <form>
          <span>Title:</span>
          <input className="posting-form-input"
            type="text"
            value={this.state.title}
            onChange={this.update("title")}>
          </input> <br></br>
        <span>Comments:</span>
          <input className="posting-form-input"
            type="text"
            value={this.state.comments}
            onChange={this.update("comments")}>
          </input> <br></br>
        <span>Link Url:</span>
          <input className="posting-form-input"
            type="text"
            value={this.state.link_url}
            onChange={this.update("link_url")}>
          </input> <br></br>
        <input className="posting-form-submit-button"
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
export default withRouter(PostingForm);
