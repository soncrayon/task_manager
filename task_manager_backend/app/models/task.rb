class Task < ApplicationRecord
  belongs_to :milestone
  belongs_to :type
  has_many :assigners
  has_many :resources
  has_many :users, through: :assigners
  has_many :users, through: :resources
end
