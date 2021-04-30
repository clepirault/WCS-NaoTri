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
            <h1>Points de Dépots</h1>
          </div>
        </Link>
        <Link to="/shop" style={{ textDecoration: 'none' }}>
          <div className="menu-enseignes">
            <img src={storeIcon} alt="Stores" className="stores" />
            <h1>Enseignes</h1>
          </div>
        </Link>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <div className="menu-espace">
            <img src={profileIcon} alt="Profil" className="profil" />
            <h1>Mon espace</h1>
          </div>
        </Link>
        <Link to="/challenge" style={{ textDecoration: 'none' }}>
          <div className="menu-defi">
            <img src={trophyIcon} alt="Challenge" className="challange" />
            <h1>Défi !</h1>
          </div>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <div className="a-propos">
            <img src={aboutIcon} alt="About" className="about" />
            <h1>À propos</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
