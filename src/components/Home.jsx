import React from 'react';
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
        <div className="menu-collecte">
          <img src={recycleBinIcon} alt="Recycle Bin" className="recycle-bin" />
          <h1>Points de collecte</h1>
        </div>
        <div className="menu-enseignes">
          <img src={storeIcon} alt="Stores" className="stores" />
          <h1>Enseignes</h1>
        </div>
        <div className="menu-espace">
          <img src={profileIcon} alt="Profil" className="profil" />
          <h1>Mon espace</h1>
        </div>
        <div className="menu-defi">
          <img src={trophyIcon} alt="Challenge" className="challange" />
          <h1>Défi !</h1>
        </div>
        <div className="a-propos">
          <img src={aboutIcon} alt="About" className="about" />
          <h1>À propos</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
