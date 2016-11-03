class Campaign < ApplicationRecord
  validates :title, :manager_id, :membership_id, :approvership_id, presence: true
  validates :title, uniqueness: true

  

end
