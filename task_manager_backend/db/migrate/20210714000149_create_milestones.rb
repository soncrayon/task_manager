class CreateMilestones < ActiveRecord::Migration[6.0]
  def change
    create_table :milestones do |t|
      t.string :name
      t.text :description
      t.string :status

      t.timestamps
    end
  end
end
