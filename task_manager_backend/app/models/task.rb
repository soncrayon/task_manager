class Task < ApplicationRecord
  belongs_to :project
  belongs_to :milestone
  belongs_to :type
  has_many :assigners
  has_many :resources
  has_many :users, through: :assigners
  has_many :users, through: :resources

  def self.tally_task_statuses
    status_hash = {}
    Task.all.each { |task| 
      if status_hash[task.status] then
        status_hash[task.status]+=1
      else
        status_hash[task.status] = 1 
      end
    }
    status_hash
  end

  def self.task_status_percentages
    percentage_hash = {}
    self.tally_task_statuses.each { |k, v|
      percentage_hash[k] = (v.to_f/Task.all.length.to_f)*100
    }
    percentage_hash
  end

end
