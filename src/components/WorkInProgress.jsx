import React from 'react';
import { useLocation } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import barricade from '../images/barricade.png';

const WorkInProgress = () => {
  return (
    <div>
      <p>Welcome to {useLocation().pathname}</p>
      <p>Workers are working on this path, come back later ;)</p>
      <img src={barricade} alt="road blocked" />
    </div>
  );
};

export default WorkInProgress;
