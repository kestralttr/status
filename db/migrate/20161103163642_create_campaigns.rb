class CreateCampaigns < ActiveRecord::Migration[5.0]
  def change
    create_table :campaigns do |t|
      t.string :title, null: false
      t.integer :manager_id, null: false
      t.integer :membership_id, null: false
      t.integer :approvership_id, null: false
      t.timestamps
    end
  end
end
