import React from 'react';
import {withRouter} from 'react-router';

class CampaignForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      members: [],
      approvers: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
    const campaign = this.state;
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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }




}
