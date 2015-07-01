class CreateReflections < ActiveRecord::Migration
  def change
    create_table :reflections do |t|
      t.string :content
      t.string :mood
      t.integer :user_id
      t.timestamps
    end
  end
end
