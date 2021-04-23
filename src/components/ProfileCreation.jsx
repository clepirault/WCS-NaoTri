/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './profileCreation.css';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import avatar from '../images/avatar.jpeg';

function ProfileCreation() {
  return (
    <div className="ProfileCreation">
      <h1 className="Naotri">NAOTRI</h1>
      <div className="picture">
        <img src={avatar} alt="avatar" className="avatar" />
        <p>Choisis ton avatar</p>
      </div>
      <div className="infos">
        <form className="pseudo">
          <label htmlFor="name">Entre ton Pseudo </label>
          <input type="text" name="name" id="name" placeholder="Pierrafeu" />
        </form>
        <form className="birthday">
          <label htmlFor="date"> Ta date de naissance </label>
          <input type="date" name="date" id="date" />
        </form>
        <form className="email">
          <label htmlFor="email"> Ton couriel </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="fred.pierrafeu@naotri.com"
          />
        </form>
        <form className="submit">
          <button type="submit" id="submit">
            Créer mon compte
          </button>
        </form>
      </div>
    </div>
  );
}
export default ProfileCreation;