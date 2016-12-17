import React from 'react';
import {Link, withRouter} from 'react-router';
import ExecutionIndex from '../execution_index/execution_index';
import ExecutionDetail from '../execution_detail/execution_detail';
import PostingIndex from '../posting_index/posting_index';
import PostingDetailContainer from '../posting_detail/posting_detail_container';
import FeedbackIndexContainer from '../feedback_index/feedback_index_container';

class CampaignDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeMediaType: "TV"
    };
    this.renderCampaignDetails = this.renderCampaignDetails.bind(this);
    this.generateExecutionForm = this.generateExecutionForm.bind(this);
    this.generatePostingForm = this.generatePostingForm.bind(this);
    this.generateFeedbackForm = this.generateFeedbackForm.bind(this);
    this.changeMediaType = this.changeMediaType.bind(this);
    this.sendMediaType = this.sendMediaType.bind(this);
  }

  componentDidMount() {
    this.props.requestCampaign(this.props.params.campaignId);
    this.props.updateMediaType("TV");
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

  generateExecutionForm(e) {
    e.preventDefault();
    this.props.router.push("/executionform");
  }

  generatePostingForm(e) {
    e.preventDefault();
    this.props.router.push("/postingform");
  }

  generateFeedbackForm(e) {
    e.preventDefault();
    this.props.router.push("/feedbackform");
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
            <button className="new-execution-button" onClick={this.generateExecutionForm}>New</button>
            <p>{this.state.activeMediaType}</p>
          </div>
          <ExecutionIndex
            activeMediaType={this.sendMediaType}
            executionIndex={this.props.executionIndex}
            executionDetail={this.props.executionDetail}
            currentUser={this.props.currentUser}
            mediaType={this.props.mediaType}
            campaignDetail={this.props.campaignDetail}
            requestExecutions={this.props.requestExecutions}
            requestExecution={this.props.requestExecution}
            clearExecution={this.props.clearExecution}
            requestCampaign={this.props.requestCampaign}
            updateMediaType={this.props.updateMediaType}
          />

        </div>

        <div className="campaign-detail-postings-container">
          <div className="campaign-detail-execution-detail-container">

              <ExecutionDetail
                executionDetail={this.props.executionDetail}
                currentUser={this.props.currentUser}
                requestExecution={this.props.requestExecution}
              />

            <button className="new-feedback-button" disabled={!this.props.postingDetail} onClick={this.generateFeedbackForm}>Add Feedback</button>
            <button className="TEST-button">New</button>
            
          </div>

          <PostingIndex
            executionDetail={this.props.executionDetail}
            postingIndex={this.props.postingIndex}
            postingDetail={this.props.postingDetail}
            requestPostings={this.props.requestPostings}
            requestPosting={this.props.requestPosting}
            clearPostings={this.props.clearPostings}
            clearPosting={this.props.clearPosting}
        	/>

          <div className="campaign-detail-posting-detail-container">
            <PostingDetailContainer
              postingDetail={this.props.postingDetail}
              currentUser={this.props.currentUser}
              requestPosting={this.props.postingDetail}
            />
        </div>
          <div className="campaign-detail-feedback-container">
            <div className="campaign-detail-feedback-header">
            </div>
              <FeedbackIndexContainer
                postingDetail={this.props.postingDetail}
                feedbackIndex={this.props.feedbackIndex}
                currentUser={this.props.currentUser}
                requestFeedback={this.props.requestFeedback}
                clearFeedback={this.props.clearFeedback}
              />
          </div>
        </div>

        {this.props.children}
      </div>
    );
  }

}

export default withRouter(CampaignDetail);
