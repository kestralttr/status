class Posting < ApplicationRecord
  validates :title, :execution_id, :link_url, presence: true

  belongs_to :execution,
  primary_key: :id,
  foreign_key: :execution_id,
  class_name: "Execution"

  has_many :feedback,
  primary_key: :id,
  foreign_key: :posting_id,
  class_name: "Feedback"

end
