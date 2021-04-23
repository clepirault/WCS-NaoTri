/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './quiz.css';

function Quiz(props) {
  const {
    id,
    name,
    question,
    image2,
    answer1,
    value1,
    image3,
    answer2,
    value2,
  } = props;
  let newPath = '';
  if (id < 2) {
    newPath = `/quiz${id + 1}`;
  } else {
    newPath = `/quizResult`;
  }
  const handleClic = (e) => {
    localStorage.setItem(e.target.name, e.target.value);
  };
  return (
    <div className="quiz-container">
      <div className="question">
        <p>{question}</p>
      </div>
      <div className="answers">
        <div>
          <img src={image2} alt="image2" />
          <label htmlFor="answer1">{answer1}</label>
          <input
            type="radio"
            name={name}
            value={value1}
            id="answer1"
            onClick={handleClic}
          />
        </div>
        <div>
          <img src={image3} alt="image3" />
          <label htmlFor="answer2">{answer2}</label>
          <input
            type="radio"
            name={name}
            value={value2}
            id="answer2"
            onClick={handleClic}
          />
        </div>
        <Link to={newPath}>
          <button type="button">Continuer</button>
        </Link>
      </div>
    </div>
  );
}

export default Quiz;
