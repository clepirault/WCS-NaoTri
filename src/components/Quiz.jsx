/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './quiz.css';

function Quiz(props) {
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(true);

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
    if (localStorage.getItem(e.target.name) === '10') {
      setActive(true);
      setActive2(false);
    } else {
      setActive(false);
      setActive2(true);
    }
  };

  return (
    <div className="quiz-container">
      <div className="question">
        <p className="name-questions">{name}</p>
        <p className="p-questions">{question}</p>
      </div>
      <div className={active2 ? 'answers' : 'answers-on'}>
        <div>
          <img className="answer-image" src={image2} alt="image2" />
          <label htmlFor="answer1">{answer1}</label>
          <input
            type="radio"
            name={name}
            value={value1}
            id="answer1"
            className="input-round"
            onClick={handleClic}
          />
        </div>
      </div>
      <div className={active ? 'answers' : 'answers-on'}>
        <div>
          <img className="answer-image" src={image3} alt="image3" />
          <label htmlFor="answer2">{answer2}</label>
          <input
            type="radio"
            name={name}
            value={value2}
            id="answer2"
            className="input-round"
            onClick={handleClic}
          />
        </div>
      </div>
      <Link to={newPath}>
        <div>
          <button className="btn-quiz" type="button">
            Continuer
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Quiz;
