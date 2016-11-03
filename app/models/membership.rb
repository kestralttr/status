class Membership < ApplicationRecord
  validates :campaign_id, :member_id, presence: true

  belongs_to :member,
  primary_key: :id,
  foreign_key: :member_id,
  class_name: "User"

  belongs_to :campaign,
  primary_key: :id,
  foreign_key: :campaign_id,
  class_name: "Campaign"

end
