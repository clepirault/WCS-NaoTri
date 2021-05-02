/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './CollectValidation.css';
import LevelUp from './LevelUp';

const distMini = 500;
const xpDepot = 50;
const levels = [0, 30, 280, 580, 930, 1330, 1780, 2280];

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
  const [levelUp, setLevelUp] = useState(false);

  const handleClick = () => {
    const previousXp = parseInt(localStorage.getItem('xp'), 10);
    const previousSp = parseInt(localStorage.getItem('sp'), 10);
    const newXp = previousXp + xpDepot;
    const newSp = previousSp + xpDepot;
    localStorage.setItem('xp', newXp);
    localStorage.setItem('sp', newSp);
    const depotPoint = [];
    depotPoint[0] = `${depositPoint.type}, ${depositPoint.city}`;
    // eslint-disable-next-line no-alert
    if (localStorage.getItem('depotHistory') === null) {
      localStorage.setItem('depotHistory', JSON.stringify(depotPoint));
    } else {
      const history = JSON.parse(localStorage.getItem('depotHistory'));
      history.unshift(depotPoint[0]);
      localStorage.setItem('depotHistory', JSON.stringify(history));
    }
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < levels.length; i++) {
      if (
        (previousXp < levels[levels.length] &&
          newXp >= levels[levels.length]) ||
        (previousXp < levels[i] && newXp >= levels[i])
      ) {
        localStorage.setItem(
          'Level',
          parseInt(localStorage.getItem('Level'), 10) + 1
        );
        setLevelUp(true);
      }
    }
  };

  return (
    <>
      {levelUp ? (
        <LevelUp setLevelUp={setLevelUp} />
      ) : (
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
                Vous devez être à moins de {distMini}m pour pouvoir valider
                votre dépôt.
              </p>
            )}
          </div>
          <div className="buttonSpace">
            <button
              type="button"
              disabled={!(dist <= distMini)}
              onClick={handleClick}
            >
              Valider
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CollectValidation;
