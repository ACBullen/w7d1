class Step < ApplicationRecord
  validates :title, :todo_id, presence: true
  validates :done, inclusion: { in: [true, false], allow_nil: true }

  belongs_to :todo
end
