import React from 'react';
import {Link, withRouter} from 'react-router';

class PostingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image_url: "",
      execution_id: props.executionDetail.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modal = this.modal.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.title || !this.state.image_url) {
      return;
    }
    const posting = {
      title: this.state.title,
      image_url: this.state.image_url,
      execution_id: this.state.execution_id
    };
    this.props.createPosting({posting});
    this.props.router.push(`/campaigns/${this.props.campaignDetail.id}`);
  }

  renderErrors() {
    if (!this.props.errors || this.props.errors.length === 0) {
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

  uploadImage(e) {
    e.preventDefault();
    let that = this;
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        if (error === null) {
          that.setState({
            image_url: images[0].url
          });
        }
      }
    );
  }

  modal() {
    return(
      <div>
        <div className='posting-form-modal-background'></div>
        <div className="posting-form-modal">
          <div className="posting-form-header">
            <h1>New Posting</h1>
            <Link to={`/campaigns/${this.props.campaignDetail.id}`}
              className="posting-form-close-button">Close</Link>
          </div>
          {this.renderErrors()}
          <form>
          <span>Title:</span><br></br>
          <input className="posting-form-input"
            type="text"
            maxLength="15"
            value={this.state.title}
            onChange={this.update("title")}>
          </input> <br></br>
        <button id="upload-posting-image-button" onClick={this.uploadImage}>Upload File</button><br></br><br></br>
        <p className="posting-info">File upload required.</p>
        <p className="posting-info">Please note that video uploads must be in MP4 format.</p>

        <div className="posting-form-submit-button"
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
export default withRouter(PostingForm);
