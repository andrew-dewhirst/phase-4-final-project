class User < ApplicationRecord
  has_many :renovations
  has_many :reviews
end
