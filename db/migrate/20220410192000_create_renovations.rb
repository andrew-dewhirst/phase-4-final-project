class CreateRenovations < ActiveRecord::Migration[6.1]
  def change
    create_table :renovations do |t|
      t.string :title
      t.string :location
      t.string :room
      t.integer :cost
      t.string :before_image
      t.string :during_image
      t.string :after_image
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
