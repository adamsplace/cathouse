class Post < ApplicationRecord
  belongs_to :user

  belongs_to :parent, class_name: "Post", optional: true
  has_many :replies, class_name: "Post", foreign_key: "parent_id", 
    dependent: :destroy

  def is_op?
    !self.parent_id
  end

end
