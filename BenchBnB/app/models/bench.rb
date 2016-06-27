class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, :seats, presence: true

  def self.in_bounds(bounds)

    self.all.select{ |bench| bench.lat.between?(bounds['southWest']['lat'].to_f, bounds['northEast']['lat'].to_f) &&
                             bench.lng.between?(bounds['southWest']['lng'].to_f, bounds['northEast']['lng'].to_f)}
  end

end
