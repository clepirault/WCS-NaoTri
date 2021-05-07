import React, { useState, useEffect } from 'react';
import axios from 'axios';
import L from 'leaflet';
import { useHistory } from 'react-router-dom';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from 'react-leaflet';
import Header from './Header';
import './Shop.css';
import blue from '../images/pins/bluePin.png';
import shadow from '../images/pins/shadow.png';
import shop from '../images/pins/shopPin.png';

const iAnchor = [0, 37];
const pAnchor = [10, -44];
const iSize = [37, 37];
const sSize = [21, 10];
const sAnchor = [-8, 6];

const bluePin = new L.Icon({
  iconUrl: blue,
  iconRetinaUrl: blue,
  iconAnchor: iAnchor,
  popupAnchor: pAnchor,
  iconSize: iSize,
  shadowUrl: shadow,
  shadowSize: sSize,
  shadowAnchor: sAnchor,
});

const shopPin = new L.Icon({
  iconUrl: shop,
  iconRetinaUrl: shop,
  iconAnchor: iAnchor,
  popupAnchor: pAnchor,
  iconSize: iSize,
  shadowUrl: shadow,
  shadowSize: sSize,
  shadowAnchor: sAnchor,
});

const srcAvatar = localStorage.getItem('avatar');
const pseudoUser = localStorage.getItem('pseudo');

const partnerShops = [
  {
    id: 1,
    name: 'Truffaut',
    address: '258 Route de Vannes',
    ville: '44700 Orvault',
    latitude: 47.24879173792753,
    longitude: -1.606460892054728,
  },
  {
    id: 2,
    name: 'Myrtille & Olive',
    address: '5 place de la Galarne',
    ville: '44200 Nantes',
    latitude: 47.20890727765062,
    longitude: -1.5295224136610706,
  },
  {
    id: 3,
    name: 'Chlorophyle',
    address: '18 rue Ordronneau',
    ville: '44400 Rezé',
    latitude: 47.19764033743909,
    longitude: -1.5828948793060467,
  },
];

function Shop(props) {
  // eslint-disable-next-line react/prop-types
  const { setShop } = props;
  const profilUser = {
    name: null,
    avatar: null,
    latitude: null,
    longitude: null,
    latLong: null,
  };

  const [center, setCenter] = useState({
    loaded: false,
    lat: profilUser.latitude,
    lng: profilUser.longitude,
  });
  const ZOOM_LEVEL = 14;

  // GEOLOCALISATION
  const options = {
    enableHighAccuracy: true,
    timeout: 30000,
    maximumAge: 27000,
  };

  const showInMapClicked = (lat, lon) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&origin=${center.lat},${center.lng}&destination=${lat},${lon}`
    );
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          setCenter({
            loaded: true,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        function b(error) {
          // eslint-disable-next-line no-console
          console.error(`error ${error.code} ${error.message}`);
        },
        options
      );
    }
  }, []);

  // API code postal => coordonnées
  const [msgHelp, setMsgHelp] = useState(
    <div>
      <p>
        Si vous ne savez pas comment activer la géolocalisation, essayez ceci:
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/142065?hl=en&co=GENIE.Platform%3DAndroid&oco=1">
            Android (Chrome)
          </a>
        </li>
        <li>
          <a href="https://support.google.com/chrome/answer/142065?hl=en&co=GENIE.Platform%3DiOS&oco=1">
            Apple (Chrome)
          </a>
        </li>
      </ul>
    </div>
  );
  const apiCPcoord = (cp) => {
    axios
      .get(`https://geo.api.gouv.fr/communes?codePostal=${cp}&format=geojson`)
      .then((response) => {
        if (!response.data.features.length) {
          setMsgHelp('Code postal non valide, veuillez recharger la page.');
        } else {
          const coord = {
            lat: response.data.features[0].geometry.coordinates[1],
            lng: response.data.features[0].geometry.coordinates[0],
          };
          setCenter({
            loaded: true,
            lat: coord.lat,
            lng: coord.lng,
          });
        }
      });
  };

  const [cp, setCp] = useState('');
  const handleCpSubmit = () => {
    apiCPcoord(cp);
  };

  const history = useHistory();

  const handleSP = (nameShop, addr, city) => {
    setShop({
      name: nameShop,
      address: addr,
      ville: city,
    });
    history.push('/sp_convert');
  };

  return (
    <div>
      {center.loaded ? (
        <MapContainer
          tap={false}
          center={center}
          zoom={ZOOM_LEVEL}
          scrollWheelZoom={false}
        >
          <LayersControl position="bottomleft">
            <LayersControl.BaseLayer name="Colorful">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Transports dark">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=dc257dbcfad448daa0ec83a930eb1425"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Transports">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=dc257dbcfad448daa0ec83a930eb1425"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Pistes cyclables">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer checked name="Default">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
          </LayersControl>

          {partnerShops.map((partnerShop) => (
            <Marker
              key={partnerShop.id}
              position={[partnerShop.latitude, partnerShop.longitude]}
              icon={shopPin}
            >
              <Popup>
                <h3>{partnerShop.name}</h3>
                <p>{partnerShop.address}</p>
                <p>{partnerShop.ville}</p>
                <button
                  type="button"
                  onClick={() =>
                    showInMapClicked(
                      partnerShop.latitude,
                      partnerShop.longitude
                    )
                  }
                >
                  Y aller !
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleSP(
                      partnerShop.name,
                      partnerShop.address,
                      partnerShop.ville
                    )
                  }
                >
                  Echanger SP
                </button>
              </Popup>
            </Marker>
          ))}

          <Marker icon={bluePin} position={center}>
            <Popup>
              <p style={{ textAlign: 'center' }}>{pseudoUser}</p>
              <img
                style={{ borderRadius: '50%' }}
                className="frog"
                src={srcAvatar}
                alt="blue frog"
              />
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div>
          <Header />
          <div className="formpostal">
            <p className="p-geoloc">
              Pour afficher la carte, vous pouvez au choix :
            </p>
            <ul>
              <li>- autoriser la géolocalisation</li>
              <li>- renseigner un code postal</li>
            </ul>
            <label className="label" htmlFor="cp">
              <input
                className="input-postal-code"
                placeholder="Code Postal.."
                type="text"
                name="cp"
                id="cp"
                value={cp}
                onChange={(e) => setCp(e.target.value)}
              />
            </label>
            <br />
            <button
              className="btn-form"
              type="button"
              onClick={() => handleCpSubmit()}
            >
              Valider
            </button>
            <p className="p-geoloc">{msgHelp}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
