import React from 'react';
import {withRouter} from 'react-router';

class CampaignIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      deleted: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.validateManager = this.validateManager.bind(this);
  }

  handleClick(url) {
    return e => {
      if (this.state.deleted === false) {
        this.props.router.replace(url);
      } else {
        this.setState({
          deleted: false
        });
      }
    };
  }

  handleDelete(campaign) {
    return e => {

      if (campaign.manager_id !== this.props.currentUser.id) {
        return;
      } else {
        return(
          this.setState({deleted: true}),
          this.props.deleteCampaign(campaign.id)
        );
      }
    };
  }

  validateManager(campaign) {
    // // console.log(campaign.managerId);
    // // console.log(this.props.currentUser.id);
    // return;
    // if (campaign.managerId !== this.props.currentUser.id) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  render() {

    return(
      <li className="campaign-index-item"
        onClick={this.handleClick(`/campaigns/${this.props.campaign.id}`)}>
        <span className="campaign-index-item-text">
          {this.props.campaign.title}
        </span>
        <div className="campaign-img-container">
          <img className="campaign-index-item-img" src={this.props.campaign.image_url}></img>
        </div>


      </li>
    );
  }

}

export default withRouter(CampaignIndexItem);
