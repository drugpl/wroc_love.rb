import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './venue_map.scss'

const VenueMap = ({ venue }) => (
  <Map center={[venue.lat, venue.lng]} zoom={13}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    />
    <Marker position={[ venue.lat, venue.lng ]}>
      <Popup maxWidth={200}>
        <strong>{venue.name}</strong><br/>
        {venue.address}
      </Popup>
    </Marker>
  </Map>
)

export default VenueMap
