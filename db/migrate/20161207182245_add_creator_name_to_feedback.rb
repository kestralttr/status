class AddCreatorNameToFeedback < ActiveRecord::Migration[5.0]
  def change
    add_column :feedbacks, :creator_name, :string
  end
end
