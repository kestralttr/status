import React from 'react';
import CampaignIndexItem from './campaign_index_item';

const CampaignIndex = ({campaignIndex, currentUser, children}) => {

  console.log(campaignIndex);
  return (
    <section className="campaign-index">
      <ul>
        {campaignIndex.map(campaign => (
          <CampaignIndexItem key={campaign.id} campaign={campaign} />
        ))}
      </ul>
      {children}
    </section>
  );

};

export default CampaignIndex;
