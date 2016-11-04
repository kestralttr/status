class RemoveColumnsFromCampaigns < ActiveRecord::Migration[5.0]
  def change
    remove_column :campaigns, :membership_id, :integer
    remove_column :campaigns, :approvership_id, :integer
  end
end
