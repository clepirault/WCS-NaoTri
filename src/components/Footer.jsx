import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import homeIcon from '../images/homeIcon.svg';
import ideaIcon from '../images/ideaIcon.svg';
import shopIcon from '../images/shopIcon.svg';
import locationIcon from '../images/locationIcon.svg';
import userIcon from '../images/userIcon.svg';

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
        <Link to="/profile">
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
