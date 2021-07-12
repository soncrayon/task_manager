class Project < ApplicationRecord
    has_many :milestones
    has_many :tasks, through: :milestones
end
