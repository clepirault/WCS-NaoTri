/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Header.css';

function Header(props) {
  // eslint-disable-next-line react/prop-types
  return <div className="headerStyle">{props.titre}</div>;
}

export default Header;
