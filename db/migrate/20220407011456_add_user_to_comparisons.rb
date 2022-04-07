class AddUserToComparisons < ActiveRecord::Migration[6.1]
  def change
    add_reference :comparisons, :user, null: false, foreign_key: true
  end
end
