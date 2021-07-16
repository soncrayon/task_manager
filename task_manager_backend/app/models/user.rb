class User < ApplicationRecord
    has_many :team_members
    has_many :assigners
    has_many :resources
end
