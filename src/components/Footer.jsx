import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import homeIcon from '../images/homeIconfull.svg';
import ideaIcon from '../images/ideaIconfull.svg';
import shopIcon from '../images/shopIconfull.svg';
import locationIcon from '../images/locationIconfull.svg';
import userIcon from '../images/profileIconfull.svg';

function Footer() {
  return (
    <div className="footerStyle">
      <div className="footerNav">
        <Link to="/home">
          <img src={homeIcon} alt="Home Icon" />
        </Link>
        <Link to="/map">
          <img src={locationIcon} alt="Location Icon" />
        </Link>
        <Link to="/shop">
          <img src={shopIcon} alt="Shops Icon" />
        </Link>
        <Link to="/userProfile">
          <img src={userIcon} alt="User Icon" />
        </Link>
        <Link to="/tips">
          <img src={ideaIcon} alt="Idea Icon" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
