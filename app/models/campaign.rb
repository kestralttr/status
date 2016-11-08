class Campaign < ApplicationRecord
  validates :title, :manager_id, presence: true
  validates :title, uniqueness: true

    has_many :memberships,
    primary_key: :id,
    foreign_key: :campaign_id,
    class_name: "Membership"

    has_many :members,
    through: :memberships,
    source: :member

    has_many :approverships,
    primary_key: :id,
    foreign_key: :campaign_id,
    class_name: "Approvership"

    has_many :approvers,
    through: :approverships,
    source: :approver

    has_many :executions,
    primary_key: :id,
    foreign_key: :campaign_id,
    class_name: "Execution"

end
