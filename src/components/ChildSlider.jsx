/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React from 'react';
import './slider.css';
import leftarrow from '../images/leftarrow.png';
import rightarrow from '../images/rightarrow.png';

function ChildSlider(props) {
  return (
    <div className="buttons">
      <button
        type="button"
        style={{
          backgroundColor: 'transparent',
          outline: 'none',
          border: 'none',
        }}
        onClick={() => props.getButtonStatus('Revenir', props.currentSlide)}
      >
        <div>
          <img
            className="leftarrow"
            src={leftarrow}
            alt="leftarrow"
            style={{ width: '20px' }}
          />
        </div>
      </button>
      {props.currentSlide === 4 ? (
        <Link to="/quiz0">
          <button type="button" className="quiz-btn">
            Quiz !
          </button>
        </Link>
      ) : (
        <button
          type="button"
          style={{
            backgroundColor: 'transparent',
            outline: 'none',
            border: 'none',
          }}
          onClick={() => props.getButtonStatus('Suivant', props.currentSlide)}
        >
          <div>
            <img
              className="rightarrow"
              src={rightarrow}
              alt="rightarrow"
              style={{
                width: '20px',
              }}
            />
          </div>
        </button>
      )}
    </div>
  );
}

export default ChildSlider;
