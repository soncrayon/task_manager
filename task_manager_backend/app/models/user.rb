class User < ApplicationRecord
    has_many :team_members
    has_many :projects, through: :team_members
    has_many :assigners
    has_many :tasks, through: :assigners
    has_many :resources
    has_many :tasks, through: :resources
end
