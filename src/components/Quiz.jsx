import { Link } from 'react-router-dom';
import './quiz.css';

function Quiz(props) {
  // eslint-disable-next-line react/prop-types
  const { id, question, image2, answer1, image3, answer2 } = props;
  let newPath = '';
  if (id < 2) {
    newPath = `/quiz${id + 1}`;
  } else {
    newPath = `/quizResult`;
  }
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
            name="thirst"
            value="plastic-bottle"
            id="answer1"
          />
        </div>
        <div>
          <img src={image3} alt="image3" />
          <label htmlFor="answer2">{answer2}</label>
          <input type="radio" name="thirst" value="flask" id="answer2" />
        </div>
        <Link to={newPath}>
          <button type="button">Continuer</button>
        </Link>
      </div>
    </div>
  );
}

export default Quiz;
