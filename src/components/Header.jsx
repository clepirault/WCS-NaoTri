import React from 'react';
import './Header.css';
// image gardé pour plus tard
// import earthlogo from '../images/planet-earth1.svg';
import naotrilogo from '../images/naotrilogonob1.png';

function Header(props) {
  // eslint-disable-next-line react/prop-types
  const { titre } = props;
  return (
    <div className="headerStyle">
      <div className="welcome">
        <img className="img-header" src={naotrilogo} alt="" />
        <h1 className="welcome-message">NAOTRI</h1>
        <div className="headerStyle">{titre}</div>
      </div>
    </div>
  );
}

export default Header;
