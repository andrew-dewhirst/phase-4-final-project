class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username, :password_digest

  has_many :renovations
  has_many :reviews
end
