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

ActiveRecord::Schema.define(version: 2021_07_16_010453) do

  create_table "assigners", force: :cascade do |t|
    t.integer "task_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["task_id"], name: "index_assigners_on_task_id"
    t.index ["user_id"], name: "index_assigners_on_user_id"
  end

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

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "client"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "resources", force: :cascade do |t|
    t.integer "task_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["task_id"], name: "index_resources_on_task_id"
    t.index ["user_id"], name: "index_resources_on_user_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "name"
    t.string "due_date"
    t.string "status"
    t.text "description"
    t.integer "milestone_id", null: false
    t.integer "type_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["milestone_id"], name: "index_tasks_on_milestone_id"
    t.index ["type_id"], name: "index_tasks_on_type_id"
  end

  create_table "team_members", force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["project_id"], name: "index_team_members_on_project_id"
    t.index ["user_id"], name: "index_team_members_on_user_id"
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

  add_foreign_key "assigners", "tasks"
  add_foreign_key "assigners", "users"
  add_foreign_key "project_milestones", "milestones"
  add_foreign_key "project_milestones", "projects"
  add_foreign_key "resources", "tasks"
  add_foreign_key "resources", "users"
  add_foreign_key "tasks", "milestones"
  add_foreign_key "tasks", "types"
  add_foreign_key "team_members", "projects"
  add_foreign_key "team_members", "users"
end
