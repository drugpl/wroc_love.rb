#= require leaflet

class window.MapView
  render: (selector, data) =>
    L.Icon.Default.imagePath = 'images'
    map = L.map(selector[0]).setView([51.108, 17.046], 14)

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for venue in data.venues
      L.marker([venue.latitude, venue.longtitude]).addTo(map)
        .bindPopup("<h2>#{venue.name}</h2><p>#{venue.address}</p>")

