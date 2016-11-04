import React from 'react';
import {withRouter} from 'react-router';

class CampaignDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderCampaignDetails = this.renderCampaignDetails.bind(this);
  }

  componentDidMount() {
    this.props.requestCampaign(this.props.params.campaignId);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      this.props.router.replace("/login");
    }
  }

  renderCampaignDetails(campaign) {
    if (!campaign) {
      return null;
    }
    return(
      <div className="campaign-detail">
        <h2>{campaign.title}</h2>
      </div>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.renderCampaignDetails(this.props.campaignDetail)}</h1>
        {this.props.children}
      </div>
    );
  }

}

export default withRouter(CampaignDetail);
