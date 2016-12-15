class RefactorPostingsTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :postings, :comments
    rename_column :postings, :link_url, :image_url
  end
end
