class Project < ApplicationRecord
    has_many :project_milestones
    has_many :milestones, through: :project_milestones
end
