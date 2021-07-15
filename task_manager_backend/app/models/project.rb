class Project < ApplicationRecord
    has_many :project_milestones
    has_many :milestones, through: :project_milestones

    attr_accessor :team_members
end
