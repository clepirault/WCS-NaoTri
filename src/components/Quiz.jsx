function Quiz(props) {
  // eslint-disable-next-line react/prop-types
  const { image1, question, image2, answer1, image3, answer2 } = props;
  return (
    <div className="quiz-container">
      <div className="question">
        <img src={image1} alt="logo" />
        <p>{question}</p>
      </div>
      <div className="first-answer">
        <img src={image2} alt="image2" />
        <p>{answer1}</p>
        <input type="checkbox" />
      </div>
      <div className="second-answer">
        <img src={image3} alt="image3" />
        <p>{answer2}</p>
        <input type="checkbox" />
      </div>
      <div className="next-btn">
        <input type="button" />
      </div>
    </div>
  );
}

export default Quiz;
