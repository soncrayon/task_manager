class ReplySerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :note
end
