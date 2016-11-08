class CreateExecutions < ActiveRecord::Migration[5.0]
  def change
    create_table :executions do |t|
      t.string :title, null: false
      t.string :media_type, null: false
      t.integer :creator_id, null: false
      t.integer :campaign_id, null: false
      t.boolean :approved
      t.string :format
      t.text :info
      t.timestamps
    end
  end
end
