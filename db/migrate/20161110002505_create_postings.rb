class CreatePostings < ActiveRecord::Migration[5.0]
  def change
    create_table :postings do |t|
      t.string :title, null: false
      t.text :comments
      t.integer :execution_id, null: false
      t.string :link_url, null: false
      t.timestamps
    end
  end
end
