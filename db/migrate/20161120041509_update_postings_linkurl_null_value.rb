class UpdatePostingsLinkurlNullValue < ActiveRecord::Migration[5.0]
  def change
    change_column :postings, :link_url, :string, null: true
  end
end
