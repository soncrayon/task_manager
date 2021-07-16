class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :due_date
      t.string :status
      t.text :description
      t.belongs_to :milestone, null: false, foreign_key: true
      # t.belongs_to :resource, null: false, foreign_key: true
      # t.belongs_to :assigner, null: false, foreign_key: true
      t.belongs_to :type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
