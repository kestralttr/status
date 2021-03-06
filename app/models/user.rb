class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :username, uniqueness: true
  after_initialize :ensure_session_token

  has_many :memberships,
  primary_key: :id,
  foreign_key: :member_id,
  class_name: "Membership"

  has_many :approverships,
  primary_key: :id,
  foreign_key: :approver_id,
  class_name: "Approvership"

  has_many :campaigns,
  through: :memberships,
  source: :campaign

  has_many :executions,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: "Execution"

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  attr_reader :password

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password )
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
