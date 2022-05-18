class User < ApplicationRecord
  validates :first_name, :last_name, :email, :username, :password, :password_confirmation, presence: true
  validates :email, uniqueness: true

  has_secure_password
  
  has_many :renovations, dependent: :destroy
  has_many :reviews, dependent: :destroy
  # has_many :commented_renovations, through: :reviews, source: :renovation
  # ^aliasing associations
end
