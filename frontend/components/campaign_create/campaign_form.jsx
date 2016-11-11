import React from 'react';
import {Link,withRouter} from 'react-router';

class CampaignForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      manager_id: props.currentUser.id,
      members: [props.currentUser.username],
      approvers: [props.currentUser.username],
      newMemberValue: "",
      modalClass: "active"
    };
    this.modalClass = "hidden";
    this.newMemberValue = "";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modal = this.modal.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.addMember = this.addMember.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const campaign = {
      title: this.state.title,
      manager_id: this.state.manager_id,
      members: this.state.members,
      approvers: this.state.approvers
    };
    this.props.createCampaign({campaign});
    this.props.router.push("/campaignindex");
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

  addMember(e) {
    e.preventDefault();
    return(
      this.setState({members: this.state.members.concat(this.state.newMemberValue),
      newMemberValue: ""})
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleModalOpen(e) {
    e.preventDefault();
    return(
      this.setState({modalClass: "active"})
    );
  }

  handleModalClose(e) {
    e.preventDefault();
    return(
      this.setState({modalClass: "hidden"})
    );
  }

  modal() {
    return(
      <div>
        <div className='campaign-form-modal-background'></div>
        <div className='campaign-form-modal'>
          <div className="campaign-form-header">
            <h1>New Campaign</h1>
            <Link to="/campaignindex"
              className="campaign-form-close-button">Close</Link>
          </div>
          {this.renderErrors()}
          <span>Title:</span><br></br>
          <input className="campaign-form-input"
            type="text"
            value={this.state.title}
            maxLength="20"
            onChange={this.update("title")}>
          </input> <br></br>
          <span>Members:</span>
          <ul>
            {this.state.members.map(function(member,idx){
              return (
                <li className="member-item" key={idx}>{member.slice(0,1).toUpperCase() + member.slice(1)}</li>
              );
            })}
          </ul> <br></br>
        <span>Add New Member:</span><br></br>
        <form>
          <input className="campaign-form-input"
            type="text"
            value={this.state.newMemberValue}
            maxLength="15"
            onChange={this.update("newMemberValue")}>
          </input>
          <input type="submit"
            className="campaign-form-button"
            onClick={this.addMember}
            value="Add Member" /> <br></br>
        </form>
          <button className="campaign-form-button"
            id="campaign-form-submit-button"
            disabled={!this.state.title}
            onClick={this.handleSubmit}>Create!</button>
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="campaign-form">
        {this.modal()}
      </div>
    );
  }

}

export default withRouter(CampaignForm);
