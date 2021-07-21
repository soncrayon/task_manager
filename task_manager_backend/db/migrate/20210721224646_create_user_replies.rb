class CreateUserReplies < ActiveRecord::Migration[6.0]
  def change
    create_table :user_replies do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :reply, null: false, foreign_key: true

      t.timestamps
    end
  end
end
