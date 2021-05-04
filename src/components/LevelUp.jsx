/* eslint-disable react/prop-types */
import React from 'react';
import levelUp from '../images/levelup.png';

const LevelUp = ({ setLevelUp }) => {
  return (
    <div>
      <p>Level Up Yaaaay!</p>
      <img src={levelUp} alt="levelup" style={{ width: '100%' }} />
      <button type="button" onClick={() => setLevelUp(false)}>
        Top merci !
      </button>
    </div>
  );
};

export default LevelUp;
