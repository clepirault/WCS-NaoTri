import './AboutUs.css';
import team from './team.jpg';
import logowcs from './logowcs.png';

const title = `A l'origine du projet`;
const text = `Nous sommes une équipe de cinq développeurs juniors issus de la Wild Code School de Nantes, et avons relevé, dans le cadre du second projet, le défi suivant qui répondait à la problématique : `;
const problematique = `Recycler doit pouvoir être ludique !
Le but de ce projet est de gamifier le recyclage afin d'inciter les gens à s'y mettre.
`;
const response = `Nous avions 5 semaines pour relever ce défi, avec nos connaissances en React, Axios, Git et méthodes agiles.`;
const conclusion = `Toute la team Naotri vous remercie !`;
const teammembers = `Ninon, Clémence, Fabien, Maxence et Nicolas`;

function AboutUs() {
  return (
    <div className="aboutus">
      <h2>{title}</h2>
      <img className="teamPhoto" src={team} alt="team-Naotri" />
      <p className="intro">{text}</p>
      <p className="problematique">{problematique}</p>
      <p className="intro">{response}</p>
      <h3>{conclusion}</h3>
      <p>{teammembers}</p>
      <img className="logowcs" src={logowcs} alt="logo-wcs" />
    </div>
  );
}

export default AboutUs;
