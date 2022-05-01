class AddLikesToRenovations < ActiveRecord::Migration[6.1]
  def change
    add_column :renovations, :likes, :integer
  end
end
