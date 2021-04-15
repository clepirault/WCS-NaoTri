import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './CollectMap.css';

// path to collect point coordinates: data.records[0].fields.geo_shape.coordinates

const profilUser = {
  name: 'Bastien Tacos',
  avatar: 'https://bit.ly/2OK8Gy4',
  mail: 'bastien.tacos@tacos.com',
  adress: '75 Rue des Français Libres, 44000 Nantes, France',
  latitude: 47.207048,
  longitude: -1.5462102,
  latLong: [47.207048, -1.5462102],
};

const position = [47.207049, -1.5462102];

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
          'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_colonnes-aeriennes-nantes-metropole&q=&facet=type_dechet&facet=commune&facet=pole&refine.commune=Nantes',
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
          setColumn(apiAerialColumn);
        });
    }
  };

  return (
    <div>
      <h2>Map</h2>
      <button type="button" onClick={apiCall}>
        {column.length === 0 ? 'Afficher Colonnes' : 'Masquer Colonnes'}
      </button>
      <MapContainer center={center} zoom={ZOOM_LEVEL}>
        <TileLayer url={dataMaps.tiles[0]} attribution={dataMaps.attribution} />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {column.map((eachColumn) => (
          <Marker
            key={eachColumn.fields.id_colonne}
            position={[
              eachColumn.fields.geo_shape.coordinates[1],
              eachColumn.fields.geo_shape.coordinates[0],
            ]}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default CollectMap;
