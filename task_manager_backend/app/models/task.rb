class Task < ApplicationRecord
  belongs_to :milestone
  belongs_to :type
  belongs_to :user

  attr_accessor :assigner, :resource


end
