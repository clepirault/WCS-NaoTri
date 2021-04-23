import './quiz.css';
import React from 'react';
// import { Link } from 'react-router-dom';

function QuizResult() {
  const score1 = localStorage.getItem('Question1') || '0';
  const score2 = localStorage.getItem('Question2') || '0';
  const score3 = localStorage.getItem('Question3') || '0';
  const result =
    parseInt(score1, 10) + parseInt(score2, 10) + parseInt(score3, 10);

  return (
    <div>
      <h3 className="quizScore">Votre score : {result}</h3>
      <p className="quizScoreMessage">
        {result === 3
          ? 'Super ! tu as réussi. Rejoins-nous vite pour collecter tes premiers points.'
          : "Tu peux mieux faire. Rejoins-nous vite pour t'améliorer !"}
      </p>
    </div>
  );
}

export default QuizResult;
