class CreateFeedbacks < ActiveRecord::Migration[5.0]
  def change
    create_table :feedbacks do |t|
      t.text :comments
      t.string :link_url
      t.integer :posting_id, null: false
      t.integer :creator_id, null: false
      t.timestamps
    end
  end
end
