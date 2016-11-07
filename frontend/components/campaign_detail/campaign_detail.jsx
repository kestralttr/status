import React from 'react';
import {Link, withRouter} from 'react-router';

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
    return (
      <div className="campaign-detail">
        <div className="campaign-detail-background"></div>
        <div className="campaign-detail-header">
          <h1 className="campaign-detail-header-title">
            {this.renderCampaignDetails(this.props.campaignDetail)}
          </h1> <br></br>
          <ul className="campaign-detail-media-types">
            <li>TV</li>
            <li>Radio</li>
            <li>Print</li>
            <li>Digital</li>
            <li>Other</li>
          </ul>
        </div>
        <div className="campaign-detail-executions-container">
          <div className="campaign-detail-executions-header">
            <h2>Executions</h2>
            <button className="new-execution-button" onClick={this.generateForm}>New Execution</button>
          </div>
          <ul className="executions-list">
            <li className="execution-list-item">Sample1</li>
            <li className="execution-list-item">Sample2</li>
            <li className="execution-list-item">Sample3</li>
            <li className="execution-list-item">Sample4</li>
            <li className="execution-list-item">Sample5</li>
            <li className="execution-list-item">Sample6</li>
            <li className="execution-list-item">Sample7</li>
            <li className="execution-list-item">Sample8</li>
            <li className="execution-list-item">Sample9</li>
            <li className="execution-list-item">Sample10</li>
          </ul>
        </div>
        <div className="campaign-detail-postings-container">
          <div className="campaign-detail-postings-header">

          </div>
        </div>
        {this.props.children}
      </div>
    );
  }

}

export default withRouter(CampaignDetail);
