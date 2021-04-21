import L from 'leaflet';

import blue from '../images/pins/bluePin.png';
import green from '../images/pins/greenPin.png';
import lime from '../images/pins/limePin.png';
import magenta from '../images/pins/magentaPin.png';
import orange from '../images/pins/orangePin.png';
import pink from '../images/pins/pinkPin.png';
import purple from '../images/pins/purplePin.png';
import red from '../images/pins/redPin.png';
import sky from '../images/pins/skyPin.png';
import turquoise from '../images/pins/turquoisePin.png';
import yellow from '../images/pins/yellowPin.png';
import shadow from '../images/pins/shadow.png';

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

const greenPin = new L.Icon({
  iconUrl: green,
  iconRetinaUrl: green,
  iconAnchor: iAnchor,
  popupAnchor: pAnchor,
  iconSize: iSize,
  shadowUrl: shadow,
  shadowSize: sSize,
  shadowAnchor: sAnchor,
});

const limePin = new L.Icon({
  iconUrl: lime,
  iconRetinaUrl: lime,
  iconAnchor: iAnchor,
  popupAnchor: pAnchor,
  iconSize: iSize,
  shadowUrl: shadow,
  shadowSize: sSize,
  shadowAnchor: sAnchor,
});

const magentaPin = new L.Icon({
  iconUrl: magenta,
  iconRetinaUrl: magenta,
  iconAnchor: iAnchor,
  popupAnchor: pAnchor,
  iconSize: iSize,
  shadowUrl: shadow,
  shadowSize: sSize,
  shadowAnchor: sAnchor,
});

const orangePin = new L.Icon({
  iconUrl: orange,
  iconRetinaUrl: orange,
  iconAnchor: iAnchor,
  popupAnchor: pAnchor,
  iconSize: iSize,
  shadowUrl: shadow,
  shadowSize: sSize,
  shadowAnchor: sAnchor,
});

const pinkPin = new L.Icon({
  iconUrl: pink,
  iconRetinaUrl: pink,
  iconAnchor: iAnchor,
  popupAnchor: pAnchor,
  iconSize: iSize,
  shadowUrl: shadow,
  shadowSize: sSize,
  shadowAnchor: sAnchor,
});

const purplePin = new L.Icon({
  iconUrl: purple,
  iconRetinaUrl: purple,
  iconAnchor: iAnchor,
  popupAnchor: pAnchor,
  iconSize: iSize,
  shadowUrl: shadow,
  shadowSize: sSize,
  shadowAnchor: sAnchor,
});

const redPin = new L.Icon({
  iconUrl: red,
  iconRetinaUrl: red,
  iconAnchor: iAnchor,
  popupAnchor: pAnchor,
  iconSize: iSize,
  shadowUrl: shadow,
  shadowSize: sSize,
  shadowAnchor: sAnchor,
});

const skyPin = new L.Icon({
  iconUrl: sky,
  iconRetinaUrl: sky,
  iconAnchor: iAnchor,
  popupAnchor: pAnchor,
  iconSize: iSize,
  shadowUrl: shadow,
  shadowSize: sSize,
  shadowAnchor: sAnchor,
});

const turquoisePin = new L.Icon({
  iconUrl: turquoise,
  iconRetinaUrl: turquoise,
  iconAnchor: iAnchor,
  popupAnchor: pAnchor,
  iconSize: iSize,
  shadowUrl: shadow,
  shadowSize: sSize,
  shadowAnchor: sAnchor,
});

const yellowPin = new L.Icon({
  iconUrl: yellow,
  iconRetinaUrl: yellow,
  iconAnchor: iAnchor,
  popupAnchor: pAnchor,
  iconSize: iSize,
  shadowUrl: shadow,
  shadowSize: sSize,
  shadowAnchor: sAnchor,
});

export default {
  bluePin,
  greenPin,
  limePin,
  magentaPin,
  orangePin,
  pinkPin,
  purplePin,
  redPin,
  skyPin,
  turquoisePin,
  yellowPin,
};
