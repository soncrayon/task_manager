class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :client
      t.text :description
      t.string :team_members, array: true, default: []

      t.timestamps
    end
  end
end
