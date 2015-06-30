class User < ActiveRecord::Base
  has_many :answers
  has_many :photos
  has_many :questions, through: :answers
end
