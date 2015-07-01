class User < ActiveRecord::Base
	validates :username, presence: true, uniqueness: true
  has_many :answers
  has_many :photos
  has_many :questions, through: :answers
end
