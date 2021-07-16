class Project < ApplicationRecord
    has_many :project_milestones
    has_many :milestones, through: :project_milestones
    has_many :team_members
    has_many :users, through: :team_members
end
