class Resource < ApplicationRecord
  belongs_to :task
  belongs_to :user

  def self.get_all_resources
    Resource.all.map { |resc| 
      resc.user
    }
  end

  def self.get_resource_tasks
    resc_tasks = {}
    Resource.all.each { |resc| 
      if resc_tasks[resc.user.name] 
        resc_tasks[resc.user.name]+=1
      else
        resc_tasks[resc.user.name] = 1
      end
    }
    resc_tasks
  end

  def self.get_top_5
    self.get_resource_tasks.max_by(5) { |k,v| v }.to_h
  end

  
end
