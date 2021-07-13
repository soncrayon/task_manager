# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

5.times do
    Project.create(name: Faker::GreekPhilosophers.name, client: Faker::Company.name)
end

Milestone.create([
    {name: "Collection", description: "Collecting data for processing", project_id: 1},
    {name: "Processing", description: "Process data in database", project_id: 2}
])