class Tagging < ApplicationRecord
  validates :tag, :todo, presence: true

  belongs_to :todo
  belongs_to :tag
end
