/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './profileCreation.css';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
/* import avatar from '../images/avatar.jpeg'; */
import astronaut from '../images/astronaut.svg';
import ninja from '../images/ninja.svg';
import monster from '../images/monster.svg';

function ProfileCreation() {
  const [pseudo, setPseudo] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');

  const handleClic = () => {
    localStorage.setItem('pseudo', pseudo);
    localStorage.setItem('birthday', birthday);
    localStorage.setItem('email', email);
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
        {/* <img src={avatar} alt="avatar" className="avatar" /> */}
        <p>Choisis ton avatar</p>
        <div>
          <img src={ninja} alt="avatar" />
          <img src={astronaut} alt="avatar" />
          <img src={monster} alt="avatar" />
        </div>
      </div>
      <div className="infos">
        <form className="pseudo">
          <label htmlFor="pseudo">Pseudo: </label>
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="Pierrafeu"
            onChange={handleChangePseudo}
            value={pseudo}
          />
        </form>
        <form className="birthday">
          <label htmlFor="birthday"> Date de naissance </label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            onChange={handleChangeBirthday}
            value={birthday}
          />
        </form>
        <form className="email">
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="fred.pierrafeu@naotri.com"
            onChange={handleChangeEmail}
            value={email}
          />
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
