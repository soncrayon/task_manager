class Assigner < ApplicationRecord
  belongs_to :task
  belongs_to :user

  def self.get_all_assigners
    Assigner.all.map { |assg| 
      assg.user
    }
  end

  def self.get_assigner_tasks
    assg_tasks = {}
    Assigner.all.each { |assg| 
      if assg_tasks[assg.user.name] 
        assg_tasks[assg.user.name]+=1
      else
        assg_tasks[assg.user.name] = 1
      end
    }
    assg_tasks
  end

  def self.get_top_5
    self.get_assigner_tasks.max_by(5) { |k,v| v }.to_h
  end

end
