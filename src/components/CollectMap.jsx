/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './CollectMap.css';

import pins from '../data/pins';

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

  // API
  let apiAerialColumn;
  const [column, setColumn] = useState([]);
  const apiCall = () => {
    if (column.length > 0) {
      setColumn([]);
    } else {
      axios
        .get(
          'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_colonnes-aeriennes-nantes-metropole&q=&facet=type_dechet&facet=commune&facet=pole',
          {
            params: {
              apikey:
                '04a7eb6b96d9388e1563ce20a134636ecea950ff095a6e554ae00c66',
              rows: 500,
            },
          }
        )
        .then((response) => response.data)
        .then((data) => {
          apiAerialColumn = data.records;
          setColumn(
            apiAerialColumn.filter(
              (eachColumn) =>
                eachColumn.fields.commune === 'Nantes' ||
                eachColumn.fields.commune === 'Rezé' ||
                eachColumn.fields.commune === 'Saint-Sébastien-sur-Loire' ||
                eachColumn.fields.commune === 'Bouguenais'
            )
          );
        });
    }
  };

  const showInMapClicked = (lat, lon) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&origin=${profilUser.latitude},${profilUser.longitude}&destination=${lat},${lon}`
    );
  };

  /* const [verre, setVerre] = useState(true);
  const showVerre = () => {
    setVerre(
      column.filter(
        (eachColumn) => !verre || eachColumn.fields.type_dechet === 'Verre'
      )
    );
  }; */

  return (
    <div>
      <h2>Map</h2>
      <button type="button" onClick={apiCall}>
        Colonnes: {column.length === 0 ? 'ON' : 'OFF'}
      </button>
      {/* <button type="button" onClick={showVerre}>
        Verres: {column.length === 0 ? 'ON' : 'OFF'}
  </button> */}
      <MapContainer center={center} zoom={ZOOM_LEVEL}>
        <TileLayer url={dataMaps.tiles[0]} attribution={dataMaps.attribution} />
        <Marker position={userPoint} icon={pins.bluePin}>
          <Popup>
            <p>{profilUser.name}</p>
            <img className="frog" src={profilUser.avatar} alt="blue frog" />
            <br /> DADADI DADADA !!!
          </Popup>
        </Marker>
        {column.map((eachColumn) => (
          <Marker
            key={eachColumn.fields.id_colonne}
            position={[
              eachColumn.fields.geo_shape.coordinates[1],
              eachColumn.fields.geo_shape.coordinates[0],
            ]}
            icon={(() => {
              switch (eachColumn.fields.type_dechet) {
                case 'Verre':
                  return pins.greenPin;
                case 'Trisac':
                  return pins.yellowPin;
                case 'Papier-carton':
                  return pins.orangePin;
                case 'Ordure ménagère':
                  return pins.redPin;
                default:
                  return pins.pinkPin;
              }
            })()}
          >
            <Popup>
              <h3>{eachColumn.fields.type_dechet}</h3>
              <p>
                {eachColumn.fields.adresse}
                <br />
                {eachColumn.fields.commune}
              </p>
              <button
                type="button"
                onClick={() =>
                  showInMapClicked(
                    eachColumn.fields.geo_shape.coordinates[1],
                    eachColumn.fields.geo_shape.coordinates[0]
                  )
                }
              >
                Y aller
              </button>
              <button type="button">Déposer</button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

// eachColumn.fields.type_dechet

export default CollectMap;
