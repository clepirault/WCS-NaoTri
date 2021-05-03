import React from 'react';

import { Link } from 'react-router-dom';

function TemporaryLinks() {
  return (
    <div>
      <p />
      <Link to="/slider">
        <button type="button">slider</button>
      </Link>
      <p />
      <Link to="/quiz0">
        <button type="button">quiz0</button>
      </Link>
      <p />
      <Link to="/quiz1">
        <button type="button">quiz1</button>
      </Link>
      <p />
      <Link to="/quiz2">
        <button type="button">quiz2</button>
      </Link>
      <p />
      <Link to="/quizResult">
        <button type="button">quizResult</button>
      </Link>
      <p />
      <Link to="/login">
        <button type="button">login</button>
      </Link>
      <p />
      <Link to="/home">
        <button type="button">home</button>
      </Link>
      <p />
      <Link to="/map">
        <button type="button">map</button>
      </Link>
      <p />
      <Link to="/shop">
        <button type="button">shop</button>
      </Link>
      <p />
      <Link to="/profileCreation">
        <button type="button">profileCreation</button>
      </Link>
      <Link to="/userProfile">
        <button type="button">userProfile</button>
      </Link>
      <p />
      <Link to="/tips">
        <button type="button">tips</button>
      </Link>
      <p />
      <Link to="/about">
        <button type="button">about</button>
      </Link>
    </div>
  );
}

export default TemporaryLinks;
