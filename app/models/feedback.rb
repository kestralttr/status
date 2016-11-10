class Feedback < ApplicationRecord
  validates :posting_id, :creator_id, presence: true
  validate :has_feedback

  def has_feedback
    unless [comments, link_url].any?{|val| val.present? }
      errors.add :base, 'You need to leave comments or a link or both.'
    end
  end

  belongs_to :posting,
  primary_key: :id,
  foreign_key: :posting_id,
  class_name: "Posting"

end
