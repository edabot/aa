json.array! @benches do |bench|
  json.extract!(
    bench,
    :description, :lat, :lng, :seats
  )
end
