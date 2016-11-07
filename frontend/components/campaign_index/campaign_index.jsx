import React from 'react';
import CampaignIndexItem from './campaign_index_item';
import {withRouter} from 'react-router';

class CampaignIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
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
    console.log("campaignIndex props:",this.props);
    return (
      <section className="campaign-index">
        <div className="campaign-index-background"></div>
        <div className="campaign-index-header">
          <h1 className="campaign-index-header-title">My Campaigns</h1>
        </div>
        <div className="campaign-index-tableau-container">
          <button className="new-campaign-button" onClick={this.generateForm}>New Campaign</button>
          <div className="campaign-index-tableau">
            <ul>
              {this.props.campaignIndex.map(campaign => (
                <CampaignIndexItem key={campaign.id} campaign={campaign} />
              ))}
            </ul>
          </div>
        </div>
        {this.props.children}
      </section>
    );
  }

}

export default withRouter(CampaignIndex);
