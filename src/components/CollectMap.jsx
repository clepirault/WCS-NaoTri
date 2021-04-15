/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './CollectMap.css';

import pïns from '../data/pins';

const profilUser = {
  name: 'Bastien Tacos',
  avatar: 'https://bit.ly/2OK8Gy4',
  mail: 'bastien.tacos@tacos.com',
  adress: '75 Rue des Français Libres, 44000 Nantes, France',
  latitude: 47.207048,
  longitude: -1.5462102,
  latLong: [47.207048, -1.5462102],
};

const userPoint = profilUser.latLong;
const compostPoint = [47.207049, -1.54];
const glassPoint = [47.2, -1.5462102];

const dataMaps = {
  tilejson: '2.0.0',
  name: 'Streets',
  attribution:
    '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  minzoom: 0,
  maxzoom: 22,
  bounds: [-180, -85.0511, 180, 85.0511],
  format: 'png',
  type: 'baselayer',
  center: [0, 0, 0],
  color: 'rgba(252, 247, 229, 1)',
  tiles: [
    'https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=5YI0xywRGZyB2zqWnifQ',
  ],
};

const CollectMap = () => {
  // eslint-disable-next-line no-unused-vars
  const [center, setCenter] = useState({
    lat: profilUser.latitude,
    lng: profilUser.longitude,
  });
  const ZOOM_LEVEL = 14;

  return (
    <div>
      <h2>Map</h2>
      <MapContainer center={center} zoom={ZOOM_LEVEL}>
        <TileLayer url={dataMaps.tiles[0]} attribution={dataMaps.attribution} />
        <Marker position={userPoint} icon={pïns.bluePin}>
          <Popup>
            <p>{"I'M BLUE"}!</p>
            <img
              className="frog"
              src="https://www.bluefroggroup.co/wp-content/uploads/2018/11/60184175_s.jpg"
              alt="blue frog"
            />
            <br /> DADADI DADADA !!!
          </Popup>
        </Marker>
        <Marker position={compostPoint} icon={pïns.pinkPin}>
          <Popup>
            Can I put a button ? <br />
            <button type="submit" onClick={() => alert('works')}>
              Yes !
            </button>
          </Popup>
        </Marker>
        <Marker className="marker" position={glassPoint} icon={pïns.redPin}>
          <Popup>
            Can I put TWO buttons ? =D
            <br />
            <button type="submit" onClick={() => alert('Holy')}>
              Yes !
            </button>
            <br />
            <button type="submit" onClick={() => alert('HOLY FUCK !')}>
              Totally !
            </button>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CollectMap;
