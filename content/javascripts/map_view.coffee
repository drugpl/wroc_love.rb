class window.MapView
  render: (selector, data) =>
    map = L.map(selector[0]).setView([51.108, 17.046], 14)

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for venue in data.venues
      L.marker([venue.latitude, venue.longtitude]).addTo(map)
        .bindPopup("<h1>#{venue.name}</h1><p>#{venue.address}</p>")

