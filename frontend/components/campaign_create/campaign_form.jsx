import React from 'react';
import {withRouter} from 'react-router';

class CampaignForm extends React.Component {

  constructor(props) {
    super(props);
    console.log("CampaignForm props:",this.props);
    this.state = {
      title: "",
      manager_id: props.currentUser.id,
      members: [props.currentUser.username],
      approvers: [props.currentUser.username],
      newMemberValue: ""
    };
    this.modalActive = false;
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

  modal() {
    return(
      <div>
        <button className="campaign-form-close-button"
          onClick={this.handleModalClose}>Close</button><br></br>
        <span>Title:</span>
        <input className="campaign-form-input"
          type="text"
          value={this.state.title}
          onChange={this.update("title")}>
        </input> <br></br>
        <span>Members:</span>
        <ul>
          {this.state.members.map(function(member,idx){
            return (
              <li className="member-item" key={idx}>{member}</li>
            );
          })}
        </ul> <br></br>
      <span>Add New Member:</span>
        <input className="campaign-form-input"
          type="text"
          value={this.state.newMemberValue}
          onChange={this.update("newMemberValue")}>
        </input>
        <button className="campaign-form-add-member-button"
          onClick={this.addMember}>Add Member</button>
      </div>
    );
  }

  handleModalOpen(e) {
    e.preventDefault();
    this.modalActive = true;
  }

  handleModalClose(e) {
    e.preventDefault();
    this.modalActive = false;
  }

  render() {
    return(
      <div className="campaign-form">
        <button className="new-campaign-button"
          onClick={this.handleModalOpen}>New Campaign</button>
        {this.modal()}
      </div>
    );
  }

}

export default withRouter(CampaignForm);
