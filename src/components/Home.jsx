import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import aboutIcon from '../images/aboutIcon.svg';
import trophyIcon from '../images/trophyIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import storeIcon from '../images/storeIcon.svg';
import recycleBinIcon from '../images/recycleBinIcon.svg';

function Home() {
  return (
    <div className="homePage">
      <div className="homeBloc">
        <Link to="/map" style={{ textDecoration: 'none' }}>
          <div className="menu-collecte">
            <img
              src={recycleBinIcon}
              alt="Recycle Bin"
              className="recycle-bin"
            />
            <p>Points de Dépots</p>
          </div>
        </Link>
        <Link to="/shop" style={{ textDecoration: 'none' }}>
          <div className="menu-enseignes">
            <img src={storeIcon} alt="Stores" className="stores" />
            <p>Enseignes</p>
          </div>
        </Link>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <div className="menu-espace">
            <img src={profileIcon} alt="Profil" className="profil" />
            <p>Mon espace</p>
          </div>
        </Link>
        <Link to="/challenge" style={{ textDecoration: 'none' }}>
          <div className="menu-defi">
            <img src={trophyIcon} alt="Challenge" className="challange" />
            <p>Défi !</p>
          </div>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <div className="a-propos">
            <img src={aboutIcon} alt="About" className="about" />
            <p>À propos</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
