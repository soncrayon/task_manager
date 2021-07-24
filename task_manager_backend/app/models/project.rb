class Project < ApplicationRecord
    has_many :project_milestones
    has_many :milestones, through: :project_milestones
    has_many :team_members
    has_many :users, through: :team_members
    has_many :tasks
    has_many :assigners, through: :tasks
    has_many :resources, through: :tasks
 
    def get_assigner_tasks 
        assg_tasks = {}
        self.assigners.each { |assg| 
          if assg_tasks[assg.user.name] 
            assg_tasks[assg.user.name]+=1
          else
            assg_tasks[assg.user.name] = 1
          end
        }
        assg_tasks
    end

    def get_top_5_assigners
        self.get_assigner_tasks.max_by(5) { |k,v| v }.to_h
    end

    def get_resources_tasks 
        resc_tasks = {}
        self.resources.each { |resc| 
          if resc_tasks[resc.user.name] 
            resc_tasks[resc.user.name]+=1
          else
            resc_tasks[resc.user.name] = 1
          end
        }
        resc_tasks
    end

    def get_top_5_resources
        self.get_resources_tasks.max_by(5) { |k,v| v }.to_h
    end
end
