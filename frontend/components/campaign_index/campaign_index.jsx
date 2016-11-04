import React from 'react';
import CampaignIndexItem from './campaign_index_item';
import {withRouter} from 'react-router';

class CampaignIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.requestCampaigns();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      this.props.router.push("login");
    }
  }

  render() {
    return (
      <section className="campaign-index">
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
