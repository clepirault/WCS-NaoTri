/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './CollectValidation.css';

const distMini = 500;

const CollectValidation = ({ userLoc, depositPoint }) => {
  function convertRad(input) {
    return (Math.PI * input) / 180;
  }

  function Distance(latA, lonA, latB, lonB) {
    const R = 6378000;

    const radLatA = convertRad(latA);
    const radLonA = convertRad(lonA);
    const radLatB = convertRad(latB);
    const radLonB = convertRad(lonB);

    const d =
      R *
      (Math.PI / 2 -
        Math.asin(
          Math.sin(radLatB) * Math.sin(radLatA) +
            Math.cos(radLonB - radLonA) * Math.cos(radLatB) * Math.cos(radLatA)
        ));
    return Math.floor(d);
  }

  // eslint-disable-next-line no-unused-vars
  const [dist, setDist] = useState(
    Distance(userLoc.lat, userLoc.lng, depositPoint.lat, depositPoint.lng)
  );

  return (
    <div className="CollectValidation">
      <div className="CollectPoint">
        <h3>Points de collecte :</h3>
        <p>
          {depositPoint.adr}, {depositPoint.city}
        </p>
        {'Type de déchet : '}
        {depositPoint.type}
      </div>
      <div className="distance">
        <h3>Distance</h3>
        {dist} m
      </div>
      <div className="message">
        {dist <= distMini ? (
          <p>Vous pouvez valider votre dépot en cliquant sur le bouton.</p>
        ) : (
          <p>
            Vous devez être à moins de {distMini}m pour pouvoir valider votre
            dépôt.
          </p>
        )}
      </div>
      <div className="buttonSpace">
        <button type="button" disabled={!(dist <= distMini)}>
          Valider
        </button>
      </div>
    </div>
  );
};

export default CollectValidation;
