/* eslint-disable react/prop-types */
import './quiz.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function QuizResult(props) {
  const score1 = localStorage.getItem('Question 1') || '0';
  const score2 = localStorage.getItem('Question 2') || '0';
  const score3 = localStorage.getItem('Question 3') || '0';
  const result =
    parseInt(score1, 10) + parseInt(score2, 10) + parseInt(score3, 10);
  const resultToScore = result / 10;
  const handleClic = () => {
    localStorage.setItem('result', result);
  };

  useEffect(() => {
    props.setShowFooter(false);
    return () => {
      props.setShowFooter(true);
    };
  }, []);

  return (
    <div className="quiz-result">
      <div className="quizScore">
        <h3>Votre score : {resultToScore}/3</h3>
      </div>
      <p className="quizScoreMessage">
        {resultToScore === 3
          ? 'Super ! tu as réussi. Rejoins-nous vite pour collecter tes premiers points.'
          : "Tu peux mieux faire. Rejoins-nous vite pour t'améliorer !"}
      </p>
      <div className="btn-final">
        <Link to="/profileCreation">
          <button className="btn-quiz" type="button" onClick={handleClic}>
            Continuer
          </button>
        </Link>
      </div>
      <p>Points gagnés: {result}</p>
    </div>
  );
}

export default QuizResult;
