import React from 'react';
import './Header.css';
// import earthlogo from '../images/planet-earth1.svg';
import naotrilogo from '../images/naotrilogonob1.png';

function Header() {
  return (
    <div className="headerStyle">
      <div className="welcome">
        <img className="img-header" src={naotrilogo} alt="" />
        <h1 className="welcome-message">NAOTRI</h1>
      </div>
    </div>
  );
}

export default Header;
