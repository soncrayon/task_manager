class ResourceSerializer < ActiveModel::Serializer
  attributes :id
  has_one :task
  has_one :user
end
