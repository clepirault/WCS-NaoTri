/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Fullscreen.css';
import downArrow from '../images/down.gif';

const msg1 = `Pour profiter d'une expérience plein écran, slidez jusqu'à faire disparaître la barre d'adresse :)`;
const msg2 = `Puis cliquez sur continuer.`;

const Fullscreen = ({ setShowFooter }) => {
  useEffect(() => {
    setShowFooter(false);
    return () => {
      setShowFooter(true);
    };
  }, []);
  return (
    <div className="Fullscreen">
      <div className="msgArrow">
        <img src={downArrow} alt="downArrow" className="arrowDown" />
        <div className="msg">
          <p>{msg1}</p>
          <p>
            <em>{msg2}</em>
          </p>
        </div>
      </div>
      <div className="bottom">
        <Link to="/home">
          <button type="button" className="bottomBtn">
            Continuer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Fullscreen;
