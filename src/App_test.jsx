/* eslint-disable global-require */
/* import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
@import url=('https://unpkg.com/leaflet@1.7.1/dist/leaflet.css');
import L from 'leaflet';

// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const coordinates = [42, 35];

function App() {
  return (
    <MapContainer center={coordinates} zoom={12} style={{ height: '350px' }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
*/
