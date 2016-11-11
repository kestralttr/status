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
    console.log(campaign.managerId);
    console.log(this.props.currentUser.id);
    return;
    if (campaign.managerId !== this.props.currentUser.id) {
      return true;
    } else {
      return false;
    }
  }

  render() {

    return(
      <li className="campaign-index-item">

        <ul>
          <li className="campaign-index-item-show"
            onClick={this.handleClick(`/campaigns/${this.props.campaign.id}`)}>
            {this.props.campaign.title}
          </li>

          <button className="campaign-index-item-delete"
            onClick={this.handleDelete(this.props.campaign)}
            disabled={this.validateManager(this.props.campaign)}>
            Delete
          </button>
        </ul>

      </li>
    );
  }

}

export default withRouter(CampaignIndexItem);
