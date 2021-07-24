5.times {
    Project.create(name: Faker::GreekPhilosophers.name, client: Faker::Company.name, description: Faker::Lorem.paragraph)
}

Milestone.create([
    {name: "Collection", description: "Collecting data for processing", status: "On Track"},
    {name: "Processing", description: "Process data in database", status: "Off Track"},
    {name: "Project Administration", description: "Account management and technical support", status: "On Track"},
    {name: "Data Transformation", description: "Mass data manipulation and revision", status: "On Track"},
    {name: "Review Support", description: "Ongoing support of data review and data manipulation", status: "Off Track"},
    {name: "Production", description: "Production of data to receiving parties", status: "On Track"},
    {name: "Ad Hoc", description: "Ad hoc tasks", status: "On Track"}
])


Project.all.each { |proj| 
    x = 0
    Milestone.all.length.times {
        ProjectMilestone.create(project_id: proj.id, milestone_id: Milestone.all.length - x)
        x = x + 1
    }
}

Type.create([
    {name: "Phase 1", description: "First phase"},
    {name: "Phase 2", description: "Second phase"},
    {name: "Phase 3", description: "Third phase"},
    {name: "Phase 4", description: "Fourth phase"},
    {name: "Phase 5", description: "Fifth phase"},
])

users_array = []

100.times {
    users_array << Faker::TvShows::RuPaul.queen 
}

users_array = users_array.uniq

for user in users_array 
    User.create({name: user, title: Faker::Job.title})
end

Project.all.each { |proj|
    x = proj.id * 10
    5.times {
        TeamMember.create({project_id: proj.id, user_id: User.all[x].id})
        x = x + 1
    }
    Milestone.all.each { |mils|
        Type.all.each { |type|
            base_task = {
                name: "#{Faker::Hacker.verb} #{Faker::Hacker.adjective} #{Faker::Hacker.noun}", 
                due_date: (Time.now + rand(1000000)).strftime("%b %d, %Y"), 
                create_date: (Time.now - rand(1000000)).strftime("%b %d, %Y"),
                description: Faker::Lorem.paragraph, 
                milestone_id: mils.id, 
                project_id: proj.id,
                type_id: type.id
            }
            3.times {
                Task.create({**base_task,
                status: "Active"})
            }
            1.times {
                Task.create({**base_task,
                status: "On Hold"})
            }
            1.times {
                Task.create({**base_task,
                status: "Cancelled"})
            }
            3.times {
                Task.create({**base_task,
                status: "Complete"})
            }
        }
    }
}



Task.all.each { |task|
    Assigner.create({task_id: task.id, user_id: User.all[rand(User.all.length)].id})
    Resource.create({task_id: task.id, user_id: User.all[rand(User.all.length)].id})
}