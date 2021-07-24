class Milestone < ApplicationRecord
    has_many :tasks
    has_many :project_milestones
    has_many :projects, through: :project_milestones

    def active_tasks
        self.tasks.select{ |task| task.status == "Active" || task.status == "On Hold"}
    end

    def self.active_tasks_per_milestone
        milestones = {}
        Milestone.all.each { |mils| 
            if milestones[mils] 
                milestones[mils.name]+=mils.active_tasks.length
            else
                milestones[mils.name] = mils.active_tasks.length
            end
        }
        milestones
    end
end
