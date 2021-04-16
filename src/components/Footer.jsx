import React from 'react';
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
        <img src={homeIcon} alt="Home Icon" />
        <img src={ideaIcon} alt="Idea Icon" />
        <img src={locationIcon} alt="Location Icon" />
        <img src={shopIcon} alt="Shops Icon" />
        <img src={userIcon} alt="User Icon" />
      </div>
      <h6 className="copyright">Copyright WCS</h6>
    </div>
  );
}

export default Footer;
