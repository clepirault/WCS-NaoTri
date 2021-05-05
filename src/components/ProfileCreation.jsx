/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import './profileCreation.css';
// link sera utilisé plus tard
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import astronaut from '../images/astronaut.svg';
import ninja from '../images/ninja.svg';
import monster from '../images/monster.svg';

function ProfileCreation() {
  const [pseudo, setPseudo] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleClic = () => {
    localStorage.setItem('pseudo', pseudo);
    localStorage.setItem('birthday', birthday);
    localStorage.setItem('email', email);
    localStorage.setItem('avatar', avatar);
    localStorage.setItem('xp', localStorage.getItem('result'));
    localStorage.setItem('sp', localStorage.getItem('result'));
    if (localStorage.getItem('xp') === '30') {
      localStorage.setItem('Level', '2');
    } else {
      localStorage.setItem('Level', '1');
    }
  };
  const handleClicAvatar = (avatarValue) => {
    setAvatar(avatarValue);
  };
  const handleChangePseudo = (event) => {
    setPseudo(event.target.value);
  };
  const handleChangeBirthday = (event) => {
    setBirthday(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="ProfileCreation">
      <h1 className="Naotri">NAOTRI</h1>
      <div className="picture">
        <p>Choisis ton avatar</p>
        <div>
          <img
            src={ninja}
            name="avatar"
            alt="avatar1"
            onClick={() => {
              handleClicAvatar(ninja);
            }}
          />
          <img
            src={astronaut}
            name="avatar"
            alt="avatar2"
            onClick={() => {
              handleClicAvatar(astronaut);
            }}
          />
          <img
            src={monster}
            name="avatar"
            alt="avatar3"
            onClick={() => {
              handleClicAvatar(monster);
            }}
          />
        </div>
      </div>
      <div className="infos">
        <form className="pseudoContainer">
          <label htmlFor="pseudo" className="pseudo">
            <p>Pseudo:</p>
            <input
              type="text"
              name="pseudo"
              id="pseudo"
              placeholder="Pierrafeu"
              onChange={handleChangePseudo}
              value={pseudo}
            />
          </label>
        </form>
        <form className="birthdayContainer">
          <label htmlFor="birthday" className="birthday">
            <p>Date de naissance:</p>
            <input
              type="date"
              name="birthday"
              id="birthday"
              onChange={handleChangeBirthday}
              value={birthday}
            />
          </label>
        </form>
        <form className="emailContainer">
          <label htmlFor="email" className="email">
            <p>Email :</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="naotri@mail.com"
              onChange={handleChangeEmail}
              value={email}
            />
          </label>
        </form>
        <form className="submit">
          <button type="submit" id="submit" onClick={handleClic}>
            Créer mon compte
          </button>
        </form>
      </div>
    </div>
  );
}
export default ProfileCreation;
