class Todo < ActiveRecord::Base
  validates :title, presence: true
  validates :done, inclusion: { in: [true, false] }

  has_many :steps
end
