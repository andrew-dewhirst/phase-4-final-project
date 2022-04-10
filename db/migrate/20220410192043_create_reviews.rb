class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :description
      t.string :rating
      t.integer :user_id
      t.integer :renovation_id

      t.timestamps
    end
  end
end
