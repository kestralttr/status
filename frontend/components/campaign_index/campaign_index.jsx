import React from 'react';
import CampaignIndexItem from './campaign_index_item';
import {withRouter} from 'react-router';

class CampaignIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.generateForm = this.generateForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.backgroundImage = this.backgroundImage.bind(this);
  }

  componentDidMount() {
    this.props.requestCampaigns();
    this.props.clearExecutions();
    this.props.clearExecution();
    this.props.clearPostings();
    this.props.clearPosting();
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

  backgroundImage() {
    return({backgroundImage: "url(http://res.cloudinary.com/dzo2s4ovl/image/upload/v1482291215/addcampaign_kqzqal.png)"});
  }

  render() {
    return (
      <section className="campaign-index">
        <div className="campaign-index-background"></div>
        <div className="campaign-index-header">
          <h1 className="campaign-index-header-title">My Campaigns</h1>
          <div>{this.renderErrors}</div>
        </div>
        <div className="campaign-index-tableau-container">

          <div className="campaign-index-tableau">
            <ul className="campaign-index-list">
              <li className="new-campaign-index-item"
                onClick={this.generateForm}
                style={this.backgroundImage()}
                >Create New Campaign
              </li>
              {this.props.campaignIndex.map(campaign => (
                <CampaignIndexItem key={campaign.id}
                  campaign={campaign}
                  deleteCampaign={this.props.deleteCampaign}
                  currentUser={this.props.currentUser} />
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
