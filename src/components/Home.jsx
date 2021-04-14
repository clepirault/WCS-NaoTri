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
        <h1>
          <img src={recycleBinIcon} alt="Recycle Bin" /> Points de collecte
        </h1>
        <h1>
          <img src={storeIcon} alt="Stores" /> Enseignes
        </h1>
        <h1>
          <img src={profileIcon} alt="Profil" /> Mon espace
        </h1>
        <h1>
          <img src={trophyIcon} alt="Challenge" /> Défi !
        </h1>
        <h1>
          <img src={aboutIcon} alt="About" />À propos
        </h1>
      </div>
    </div>
  );
}

export default Home;
