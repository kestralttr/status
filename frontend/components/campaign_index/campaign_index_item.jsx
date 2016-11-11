import React from 'react';
import {withRouter} from 'react-router';

class CampaignIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      deleted: false
    };
    this.handleClick.bind(this);
    this.handleDelete.bind(this);
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

  handleDelete(id) {
    return e => (
      this.setState({deleted: true}),
      this.props.deleteCampaign(id)
    );
  }

  render() {
    return(
      <li className="campaign-index-item"
        onClick={this.handleClick(`/campaigns/${this.props.campaign.id}`)}>

        <div>{this.props.campaign.title}</div>


      </li>
    );
  }

}

export default withRouter(CampaignIndexItem);
