class AddImageUrlToCampaigns < ActiveRecord::Migration[5.0]
  def change
    add_column :campaigns, :image_url, :string
  end
end
