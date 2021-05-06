import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import aboutIcon from '../images/aboutIcon.svg';
import storeIcon from '../images/shopIconfull.svg';
import trophyIcon from '../images/trophyIcon.svg';
import userIcon from '../images/profileIconfull.svg';
import ideaIcon from '../images/ideaIconfull.svg';
// import recycleBinIcon from '../images/recycleBinIcon.svg';
import locationIcon from '../images/locationIconfull.svg';

function Home() {
  return (
    <div className="homePage">
      <div className="homeBloc">
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <div className="menu-espace">
            <img src={userIcon} alt="Profil" className="profil" />
            <p>Mon espace</p>
          </div>
        </Link>
        <Link to="/map" style={{ textDecoration: 'none' }}>
          <div className="menu-collecte">
            <img src={locationIcon} alt="Recycle Bin" className="recycle-bin" />
            <p>Points de Dépots</p>
          </div>
        </Link>
        <Link to="/shop" style={{ textDecoration: 'none' }}>
          <div className="menu-enseignes">
            <img src={storeIcon} alt="Stores" className="stores" />
            <p>Enseignes</p>
          </div>
        </Link>
        <Link to="/challenge" style={{ textDecoration: 'none' }}>
          <div className="menu-defi">
            <img src={trophyIcon} alt="Challenge" className="challange" />
            <p>Règles du jeu</p>
          </div>
        </Link>
        <Link to="/tips" style={{ textDecoration: 'none' }}>
          <div className="goodhabits">
            <img src={ideaIcon} alt="About" className="habits" />
            <p>Good habits</p>
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
