import React from 'react';
import CampaignIndexItem from './campaign_index_item';

const CampaignIndex = ({campaignIndex, loading, children}) => {
  if (loading) {
    return (
      <img
        src="/assets/ring.gif"
        alt="campaign index loading"
      />
    );
  } else {
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
  }
};

export default CampaignIndex;
