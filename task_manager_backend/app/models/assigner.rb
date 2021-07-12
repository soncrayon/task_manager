class Assigner < ApplicationRecord
    has_many :tasks
    has_many :resources, through: :tasks
end
