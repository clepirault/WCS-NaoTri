import './quiz.css';
import React from 'react';
// import { Link } from 'react-router-dom';//
import localStorage from 'localStorage';

function QuizResult() {
  const score1 = localStorage.getItem('Question1') || '0';
  const score2 = localStorage.getItem('Question2') || '0';
  const result = score1 + score2;

  return (
    <div>
      <h3>Votre score : {result}</h3>
      <p>
        {result === 2
          ? 'Bravo vous avez réussi'
          : 'Vous ferez mieux la prochaine fois :-)'}
      </p>
    </div>
  );
}

export default QuizResult;
