class Resource < ApplicationRecord
    has_many :tasks
    has_many :assigners, through: :tasks
end
