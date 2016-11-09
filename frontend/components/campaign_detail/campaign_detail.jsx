import React from 'react';
import {Link, withRouter} from 'react-router';
import ExecutionIndexContainer from '../execution_index/execution_index_container';
import ExecutionDetailContainer from '../execution_detail/execution_detail_container';

class CampaignDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeMediaType: "TV"
    };
    this.renderCampaignDetails = this.renderCampaignDetails.bind(this);
    this.generateForm = this.generateForm.bind(this);
    this.changeMediaType = this.changeMediaType.bind(this);
    this.sendMediaType = this.sendMediaType.bind(this);
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

  generateForm(e) {
    e.preventDefault();
    this.props.router.push("/executionform");
  }

  changeMediaType(mediaType) {
    return e => {
      this.props.updateMediaType(mediaType);
      this.setState({activeMediaType: mediaType});
    };
  }

  sendMediaType() {
    if (this.props.mediaType) {
      return(this.props.mediaType);
    } else {
      return("TV");
    }
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
            <li value="TV" onClick={this.changeMediaType("TV")}>TV</li>
            <li value="Radio" onClick={this.changeMediaType("Radio")}>Radio</li>
            <li value="Print" onClick={this.changeMediaType("Print")}>Print</li>
            <li value="Digital" onClick={this.changeMediaType("Digital")}>Digital</li>
            <li value="Other" onClick={this.changeMediaType("Other")}>Other</li>
          </ul>
        </div>
        <div className="campaign-detail-executions-container">
          <div className="campaign-detail-executions-header">
            <h2>Executions</h2>
            <button className="new-execution-button" onClick={this.generateForm}>New Execution</button>
            <p>{this.state.activeMediaType}</p>
          </div>
          <ExecutionIndexContainer activeMediaType={this.sendMediaType}/>
        </div>
        <div className="campaign-detail-execution-detail-container">
          <ExecutionDetailContainer />
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
