class Task < ApplicationRecord
  belongs_to :milestone
  belongs_to :resource
  belongs_to :assigner
  belongs_to :type
end
