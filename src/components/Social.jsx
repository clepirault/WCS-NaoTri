import React from 'react';
import './Social.css';
import instagram from '../images/instagram.svg';
import youtube from '../images/youtube.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';

function Social() {
  return (
    <div className="socialStyle">
      <h5 className="socialTitle">Rejoignez-nous!</h5>
      <div className="socialIcons">
        <img src={instagram} alt="Instagram Icon" />
        <img src={youtube} alt="Youtube Icon" />
        <img src={facebook} alt="Facebook Icon" />
        <img src={twitter} alt="Twitter Icon" />
      </div>
    </div>
  );
}

export default Social;
