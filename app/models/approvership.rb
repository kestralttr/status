class Approvership < ApplicationRecord
  validates :campaign_id, :approver_id, presence: true

  belongs_to :approver,
  primary_key: :id,
  foreign_key: :approver_id,
  class_name: "User"

  belongs_to :campaign,
  primary_key: :id,
  foreign_key: :campaign_id,
  class_name: "Campaign"

end
