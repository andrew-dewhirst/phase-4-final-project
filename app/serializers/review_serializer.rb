class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating, :user_id, :renovation_id
end
