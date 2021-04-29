/* eslint-disable react/prop-types */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import { Link } from 'react-router-dom';
import React from 'react';

function ChildSlider(props) {
  console.log(props);
  return (
    <div>
      <button
        type="button"
        onClick={() => props.getButtonStatus('Revenir', props.currentSlide)}
      >
        Revenir
      </button>
      <button
        type="button"
        onClick={() =>
          props.getButtonStatus('Revoir du début', props.currentSlide)
        }
      >
        Revoir du début
      </button>
      {props.currentSlide === 4 ? (
        <Link to="/quiz0">
          <button type="button">QUIZ</button>
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => props.getButtonStatus('Suivant', props.currentSlide)}
        >
          Suivant
        </button>
      )}
    </div>
  );
}

export default ChildSlider;
