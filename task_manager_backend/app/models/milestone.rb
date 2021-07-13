class Milestone < ApplicationRecord
  belongs_to :project
  has_many :tasks
  has_many :types, through: :tasks
end
