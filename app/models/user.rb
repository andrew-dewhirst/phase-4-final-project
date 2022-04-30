class User < ApplicationRecord
  has_secure_password
  
  has_many :renovations
  has_many :reviews
end
