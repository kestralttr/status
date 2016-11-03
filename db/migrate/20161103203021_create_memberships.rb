class CreateMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :memberships do |t|
      t.integer :campaign_id, null: false
      t.integer :member_id, null: false
      t.timestamps
    end
  end
end
