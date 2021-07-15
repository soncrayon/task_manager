# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_15_011059) do

  create_table "milestones", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "project_milestones", force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "milestone_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["milestone_id"], name: "index_project_milestones_on_milestone_id"
    t.index ["project_id"], name: "index_project_milestones_on_project_id"
  end

  create_table "project_team_members", force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "team_member_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_project_team_members_on_project_id"
    t.index ["team_member_id"], name: "index_project_team_members_on_team_member_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "client"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tasks", force: :cascade do |t|
    t.string "name"
    t.string "due_date"
    t.string "status"
    t.text "description"
    t.integer "milestone_id", null: false
    t.integer "resource_id", null: false
    t.integer "assigner_id", null: false
    t.integer "type_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["assigner_id"], name: "index_tasks_on_assigner_id"
    t.index ["milestone_id"], name: "index_tasks_on_milestone_id"
    t.index ["resource_id"], name: "index_tasks_on_resource_id"
    t.index ["type_id"], name: "index_tasks_on_type_id"
  end

  create_table "team_members", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "types", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "project_milestones", "milestones"
  add_foreign_key "project_milestones", "projects"
  add_foreign_key "project_team_members", "projects"
  add_foreign_key "project_team_members", "team_members"
  add_foreign_key "tasks", "assigners"
  add_foreign_key "tasks", "milestones"
  add_foreign_key "tasks", "resources"
  add_foreign_key "tasks", "types"
end
