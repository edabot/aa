class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    self.all.select{ |bench| bench.lat.between?(bounds.northEast.lat, bound.southWest.lat) &&
                             bench.lng.between?(bounds.northEast.lng, bound.southWest.lng)}
  end

end
