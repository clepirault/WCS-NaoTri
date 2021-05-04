/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React from 'react';
import './slider.css';

function ChildSlider(props) {
  return (
    <div className="buttons">
      <button
        type="button"
        onClick={() => props.getButtonStatus('Revenir', props.currentSlide)}
      >
        <div className="arrow-left" />
      </button>
      {props.currentSlide === 4 ? (
        <Link to="/quiz0">
          <button type="button">Quiz !</button>
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => props.getButtonStatus('Suivant', props.currentSlide)}
        >
          <div className="arrow-right" />
        </button>
      )}
    </div>
  );
}

export default ChildSlider;
