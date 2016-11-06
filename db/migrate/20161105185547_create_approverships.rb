class CreateApproverships < ActiveRecord::Migration[5.0]
  def change
    create_table :approverships do |t|
      t.integer :campaign_id, null: false
      t.integer :approver_id, null: false
      t.timestamps
    end
  end
end
