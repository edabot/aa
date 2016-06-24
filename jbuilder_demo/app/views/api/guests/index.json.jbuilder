# json.array! @guests, :name, :age, :favorite_color

json.guests @guests do |guest|
  if guest.age > 40 && guest.age < 50
    json.partial!('api/guests/guest', guest: guest, show_gifts: false)
  end
end
