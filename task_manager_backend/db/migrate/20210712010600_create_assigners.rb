class CreateAssigners < ActiveRecord::Migration[6.0]
  def change
    create_table :assigners do |t|
      t.string :name
      t.string :title

      t.timestamps
    end
  end
end
