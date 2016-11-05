import React from 'react';
import CampaignIndexItem from './campaign_index_item';
import {withRouter} from 'react-router';

class CampaignIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    console.log("CampaignIndex:",this.props);
    this.generateForm = this.generateForm.bind(this);
  }

  componentDidMount() {
    this.props.requestCampaigns();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      this.props.router.push("login");
    }
  }

  generateForm(e) {
    e.preventDefault();
    this.props.router.push("/campaignform");
  }

  render() {
    return (
      <section className="campaign-index">
        <button onClick={this.generateForm}>New Campaign</button>
        <ul>
          {this.props.campaignIndex.map(campaign => (
            <CampaignIndexItem key={campaign.id} campaign={campaign} />
          ))}
        </ul>
        {this.props.children}
      </section>
    );
  }

}

export default withRouter(CampaignIndex);
