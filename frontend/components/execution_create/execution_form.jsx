import React from 'react';
import {Link, withRouter} from 'react-router';

class ExecutionForm extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      title: "",
      media_type: props.mediaType,
      creator_id: props.currentUser.id,
      campaign_id: props.campaignDetail.id,
      approved: false,
      format: "",
      info: "",
      modalClass: "active"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modal = this.modal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.title) {
      return;
    }
    const execution = {
      title: this.state.title,
      media_type: this.state.media_type,
      creator_id: this.state.creator_id,
      campaign_id: this.state.campaign_id,
      approved: this.state.approved,
      format: this.state.format,
      info: this.state.info
    };
    this.props.createExecution({execution});
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
        <div className='execution-form-modal-background'></div>
        <div className="execution-form-modal">
          <div className="execution-form-header">
            <h1>New Advertisement</h1>
            <Link to={`/campaigns/${this.props.campaignDetail.id}`}
              className="execution-form-close-button">Close</Link>
          </div>
          {this.renderErrors()}
          <form>
          <span>Title:</span><br></br>
          <input className="execution-form-input"
            type="text"
            value={this.state.title}
            maxLength="15"
            onChange={this.update("title")}>
          </input> <br></br>

        <span>Format:</span><br></br>
          <input className="execution-form-input"
            type="text"
            value={this.state.format}
            maxLength="30"
            onChange={this.update("format")}>
          </input> <br></br>
        <span>Info:</span><br></br>
          <textarea className="execution-form-input"
            rows="2"
            cols="1"
            value={this.state.info}
            maxLength="60"
            onChange={this.update("info")}>
          </textarea> <br></br>
        <div className="execution-form-submit-button"
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

export default withRouter(ExecutionForm);
