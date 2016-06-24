json.extract! party, :name, :location

json.guests do
  json.array!(party.guests) do |guest|
    json.partial!('api/guests/guest', guest: guest, show_gifts: show_gifts)
  end
end
