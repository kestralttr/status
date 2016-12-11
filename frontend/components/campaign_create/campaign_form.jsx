import React from 'react';
import {Link,withRouter} from 'react-router';

class CampaignForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      manager_id: props.currentUser.id,
      members: [],
      approvers: [props.currentUser.username],
      newMemberValue: "",
      modalClass: "active",
      str: "",
      userSearch: null
    };
    this.modalClass = "hidden";
    this.newMemberValue = "";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modal = this.modal.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.addMember = this.addMember.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateApprover = this.updateApprover.bind(this);
    this.renderUserSearch = this.renderUserSearch.bind(this);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillUnmount() {
    this.props.clearUsers();
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


  updateTitle(e) {
      this.setState({["title"]: e.currentTarget.value
    });
  }

  updateApprover(e) {
      if (e.currentTarget.value !== "") {
        this.props.requestUsers(e.currentTarget.value);
      } else if (e.currentTarget.value === "") {
        this.props.clearUsers();
      }
      this.setState({["str"]: e.currentTarget.value});
      console.log(this.state.userSearch);
      if (e.currentTarget.value !== "") {
        this.setState({["userSearch"]: this.renderUserSearch()});
      }
  }

  renderUserSearch() {
    if (this.props.userIndex && !this.props.userIndex.length > 0) {
      console.log("renderUserSearch activated");
      return(
        <ul>
          {this.props.userIndex.map(user => (
            <li>
              {user.username}
            </li>
          ))}
        </ul>
      );
    }
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

  handleUsernameInput(e) {
    e.preventDefault();
    console.log("working");
    let str = this.state.str;
    return(
      this.setState({str: this.state.str + e.currentTarget.value}),
      console.log(this.state.str)
    );
  }

  displayUsernameIndex() {

  }

  addMember(username) {
    return e => this.setState({
      members: this.state.members.concat(username)
    });
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
            maxLength="50"
            onChange={this.updateTitle}>
          </input> <br></br>
        <span>Approvers:</span>
          <ul>
            {this.state.members.map(function(member,idx){
              return (
                <li className="member-item" key={idx}>{member.slice(0,1).toUpperCase() + member.slice(1)}</li>
              );
            })}
          </ul> <br></br>
        <span>Add New Approver:</span><br></br>
        <form autoComplete="off">
          <input autoComplete="false" name="hidden" type="hidden"></input>
          <input className="campaign-form-input"
            id="member-input"
            type="text"
            value={this.state.str}
            maxLength="15"
            onChange={this.updateApprover}>

          </input>
          <div id="user-search">
            {this.props.userIndex.map((user,idx) => {
              return (
                <ul>
                  <li className="user-item"
                    key={idx}
                    onClick={this.addMember(user.username)}>
                    {user.username}
                  </li>
                </ul>
              );
            })}
          </div>
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
