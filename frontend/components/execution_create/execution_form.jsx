import React from 'react';
import {Link, withRouter} from 'react-router';

class ExecutionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      media_type: "TV",
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
        <div className='modal-background'></div>
        <div className="modal">
          <div className="execution-form-header">
            <h1>New Execution</h1>
            <Link to={`/campaigns/${this.props.campaignDetail.id}`}
              className="execution-form-close-button">Close</Link>
          </div>
          {this.renderErrors()}
          <form>
          <span>Title:</span>
          <input className="execution-form-input"
            type="text"
            value={this.state.title}
            onChange={this.update("title")}>
          </input> <br></br>
          <span>Media</span>
          <select className="execution-form-dropdown"
            value={this.state.media_type}
            onChange={this.update("media_type")}>
            <option value="TV">TV</option>
            <option value="Radio">Radio</option>
            <option value="Print">Print</option>
            <option value="Digital">Digital</option>
            <option value="Other">Other</option>
          </select> <br></br><br></br>
          <span>Format:</span>
          <input className="execution-form-input"
            type="text"
            value={this.state.format}
            onChange={this.update("format")}>
          </input> <br></br>
        <span>Info:</span>
          <input className="execution-form-input"
            type="text"
            value={this.state.info}
            onChange={this.update("info")}>
          </input> <br></br>
        <input className="execution-form-submit-button"
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
        TESTING!
        {this.modal()}
      </div>
    );
  }

}

export default withRouter(ExecutionForm);
