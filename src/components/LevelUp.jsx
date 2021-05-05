/* eslint-disable react/prop-types */
import React from 'react';
import './LevelUp.css';
import levelUp from '../images/levelUpImage.png';

const LevelUp = ({ setLevelUp }) => {
  return (
    <div className="LevelUp">
      <div>
        <p>Tu viens de gagner un niveau !</p>
        <p>
          <em>Jayjayyyy !</em>
        </p>
      </div>
      <img src={levelUp} alt="levelup" style={{ width: '100%' }} />
      <button type="button" onClick={() => setLevelUp(false)}>
        Top !
      </button>
    </div>
  );
};

export default LevelUp;
