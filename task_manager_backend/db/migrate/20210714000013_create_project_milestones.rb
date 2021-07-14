class CreateProjectMilestones < ActiveRecord::Migration[6.0]
  def change
    create_table :project_milestones do |t|
      t.belongs_to :project, null: false, foreign_key: true
      t.belongs_to :milestone, null: false, foreign_key: true

      t.timestamps
    end
  end
end
