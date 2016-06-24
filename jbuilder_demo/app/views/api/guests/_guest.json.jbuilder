json.extract! guest, :name, :age, :favorite_color

if show_gifts
  json.gifts do
    json.array!(guest.gifts) do |gift|
      json.extract! gift, :title, :description
    end
  end
end
