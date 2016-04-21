class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :code
      t.float :price
      t.string :image_url

      t.timestamps null: false
    end
  end
end
