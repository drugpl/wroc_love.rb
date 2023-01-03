import React from "react"
import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const VenueMap = ({ venue }) => (
  <MapContainer
    center={[venue.lat, venue.lng]}
    zoom={13}
    dragging={!L.Browser.mobile}
  >
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
    />
    <Marker position={[venue.lat, venue.lng]}>
      <Popup maxWidth={200}>
        <strong>{venue.name}</strong>
        <br />
        {venue.address}
      </Popup>
    </Marker>
  </MapContainer>
)

export default VenueMap
