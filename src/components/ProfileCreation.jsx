/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import './profileCreation.css';
import { useHistory } from 'react-router-dom';
import astronaut from '../images/astronaut.svg';
import ninja from '../images/ninja.svg';
import monster from '../images/monster.svg';

function ProfileCreation(props) {
  const [pseudo, setPseudo] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const history = useHistory();
  const [enableCreation, setEnableCreation] = useState(false);

  if (pseudo && birthday && email && avatar && !enableCreation)
    setEnableCreation(true);

  useEffect(() => {
    props.setShowFooter(false);
    return () => {
      props.setShowFooter(true);
    };
  }, []);

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
    history.push('/home');
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
      <h1 className="Naotri">Créer ton compte</h1>
      <div className="picture">
        <p>Choisis ton avatar</p>
        <div>
          <img
            src={ninja}
            name="avatar"
            alt="avatar1"
            style={{
              borderRadius: '50%',
              boxShadow: `${avatar === ninja ? '0px 0px 10px 5px grey' : ''}`,
            }}
            onClick={() => {
              handleClicAvatar(ninja);
            }}
          />
          <img
            src={astronaut}
            name="avatar"
            alt="avatar2"
            style={{
              borderRadius: '50%',
              boxShadow: `${
                avatar === astronaut ? '0px 0px 10px 5px grey' : ''
              }`,
            }}
            onClick={() => {
              handleClicAvatar(astronaut);
            }}
          />
          <img
            src={monster}
            name="avatar"
            alt="avatar3"
            style={{
              borderRadius: '50%',
              boxShadow: `${avatar === monster ? '0px 0px 10px 5px grey' : ''}`,
            }}
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
              placeholder="Pseudo"
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
          <button
            type="submit"
            id="submit"
            onClick={handleClic}
            disabled={!enableCreation}
          >
            Créer mon compte
          </button>
        </form>
      </div>
    </div>
  );
}
export default ProfileCreation;
