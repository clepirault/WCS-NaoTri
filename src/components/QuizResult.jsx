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
      <iframe
        title="gif1"
        src={(() => {
          switch (resultToScore) {
            case 3:
              return 'https://giphy.com/embed/3oz8xAFtqoOUUrsh7W';
            case 2:
              return 'https://giphy.com/embed/l1J9xV815LOOTUju0';
            case 1:
              return 'https://giphy.com/embed/9xijGdDIMovchalhxN';
            default:
              return 'https://giphy.com/embed/xkPyw3UXrSGAp4UBTZ';
          }
        })()}
        width="360"
        height="200"
        frameBorder="0"
        className="giphy-embed"
      />
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
