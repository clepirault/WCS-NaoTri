/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import './UserProfile.css';
import level1 from '../images/levelBadges/1.png';
import level2 from '../images/levelBadges/2.png';
import level3 from '../images/levelBadges/3.png';
import level4 from '../images/levelBadges/4.png';
import level5 from '../images/levelBadges/5.png';
import level6 from '../images/levelBadges/6.png';
import level7 from '../images/levelBadges/7.png';
import level8 from '../images/levelBadges/8.png';
import bubble from '../images/bubble.png';
import coins from '../images/coins.png';
import UserProfileProgressBar from './UserProfileProgressBar';

const UserProfile = () => {
  const levels = [0, 30, 280, 580, 930, 1330, 1780, 2280];
  const srcAvatar = localStorage.getItem('avatar');
  const xp = localStorage.getItem('xp');
  const sp = localStorage.getItem('sp');
  const level = parseInt(localStorage.getItem('Level'), 10);
  const xpLevel = levels[level - 1];
  const xpNextLevel = levels[level];
  const history = JSON.parse(localStorage.getItem('depotHistory'));
  return (
    <div className="UserProfile">
      <div className="top">
        <img src={srcAvatar} alt="avatar" className="avatarProfil" />
        <div className="points">
          <div className="sp">
            <img src={coins} alt="coins" className="coins" />
            <p>{sp} SP</p>
          </div>
          <div className="xp">
            <p>Prochain level : {xpNextLevel - xp} xp</p>
            <UserProfileProgressBar
              completed={((xp - xpLevel) * 100) / xpNextLevel}
              currentxp={xp - xpLevel}
            />
          </div>
        </div>
      </div>
      <p className="level">Level</p>
      <div className="badges">
        {level >= 1 ? (
          <img src={level1} alt="badge" className="badge" />
        ) : (
          <img src={bubble} alt="badge" className="badge" />
        )}
        {level >= 2 ? (
          <img src={level2} alt="badge" className="badge" />
        ) : (
          <img src={bubble} alt="badge" className="badge" />
        )}
        {level >= 3 ? (
          <img src={level3} alt="badge" className="badge" />
        ) : (
          <img src={bubble} alt="badge" className="badge" />
        )}
        {level >= 4 ? (
          <img src={level4} alt="badge" className="badge" />
        ) : (
          <img src={bubble} alt="badge" className="badge" />
        )}
        {level >= 5 ? (
          <img src={level5} alt="badge" className="badge" />
        ) : (
          <img src={bubble} alt="badge" className="badge" />
        )}
        {level >= 6 ? (
          <img src={level6} alt="badge" className="badge" />
        ) : (
          <img src={bubble} alt="badge" className="badge" />
        )}
        {level >= 7 ? (
          <img src={level7} alt="badge" className="badge" />
        ) : (
          <img src={bubble} alt="badge" className="badge" />
        )}
        {level >= 8 ? (
          <img src={level8} alt="badge" className="badge" />
        ) : (
          <img src={bubble} alt="badge" className="badge" />
        )}
      </div>
      {history === null ? (
        ''
      ) : (
        <>
          <p className="historyTitle">History</p>
          <div className="history">
            {history.map((hist) => (
              <p>{hist}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
