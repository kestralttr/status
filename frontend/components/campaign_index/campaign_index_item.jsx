import React from 'react';
import {withRouter} from 'react-router';

const CampaignIndexItem = ({campaign, router}) => {
  const handleClick = url => e => router.push(url);
  return(
    <li className="campaign-index-item"
      onClick={handleClick(`/campaign/${campaign.id}`)}>

      <div>{campaign.title}</div>

    </li>
  );
};

export default withRouter(CampaignIndexItem);
