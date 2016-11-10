class Execution < ApplicationRecord

  belongs_to :campaign,
  primary_key: :id,
  foreign_key: :campaign_id,
  class_name: "Campaign"

  belongs_to :creator,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: "User"

  has_many :postings,
  primary_key: :id,
  foreign_key: :execution_id,
  class_name: "Posting"

end
