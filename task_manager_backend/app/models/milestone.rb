class Milestone < ApplicationRecord
    has_many :tasks
    has_many :project_milestones
    has_many :projects, through: :project_milestones
end
