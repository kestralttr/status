class Campaign < ApplicationRecord
  validates :title, :manager_id, :membership_id, :approvership_id, presence: true
  validates :title, uniqueness: true

    has_many :memberships,
    primary_key: :id,
    foreign_key: :campaign_id,
    class_name: "Membership"

    has_many :members,
    through: :memberships,
    source: :member

end
