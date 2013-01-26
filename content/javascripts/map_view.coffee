#= require leaflet

class window.MapView
  render: (selector, data) =>
    icon = new L.Icon
        iconUrl: '/images/marker-icon.png'
        iconRetinaUrl: '/images/marker-icon@2x.png'
        iconSize: [25, 34]
        iconAnchor: [12, 33]
        popupAnchor: [1, -27]
        shadowSize: [41, 41]
        shadowAnchor: [12, 40]

    map = L.map(selector[0], attributionControl: false)
    map.setView([51.108, 17.046], 14)

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for venue in data.venues
      marker = L.marker([venue.latitude, venue.longtitude], {icon: icon})
      marker.addTo(map)
      marker.bindPopup("<h2>#{venue.name}</h2><p>#{venue.address}</p>")
      marker.openPopup() if venue.showPopup

