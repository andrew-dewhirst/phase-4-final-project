class RenovationSerializer < ActiveModel::Serializer
  attributes :id, :title, :location, :room, :cost, :before_image, :during_image, :after_image, :description, :user_id, :likes

  has_many :reviews
end
