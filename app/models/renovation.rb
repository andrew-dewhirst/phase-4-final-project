class Renovation < ApplicationRecord
  validates :title, :location, :room, :cost, :description, presence: true

  belongs_to :user
  has_many :reviews, dependent: :destroy
end
