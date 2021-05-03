/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import level1 from '../images/levelBadges/1.png';
import level2 from '../images/levelBadges/2.png';
import level3 from '../images/levelBadges/3.png';
import level4 from '../images/levelBadges/4.png';
import level5 from '../images/levelBadges/5.png';
import level6 from '../images/levelBadges/6.png';
import level7 from '../images/levelBadges/7.png';
import level8 from '../images/levelBadges/8.png';

const srcAvatar = localStorage.getItem('avatar');

const UserProfile = () => {
  return (
    <div className="UserProfile">
      <div className="top">
        <img src={srcAvatar} alt="avatar" className="avatar" />
        <div className="points">
          <div className="sp" />
          <div className="xp" />
        </div>
      </div>
      <div className="badge" />
      <div className="history" />
    </div>
  );
};

export default UserProfile;
