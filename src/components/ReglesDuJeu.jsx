import React from 'react';
import './ReglesDuJeu.css';
import dice from '../images/dice.svg';

const WorkInProgress = () => {
  return (
    <div className="rules-container">
      <img alt="" src={dice} />
      <h1 className="punder">regles du jeu</h1>
      <h2>Bienvenue sur Naotri, prêt a devenir un éco-citoyen ?</h2>
      <h2 className="punder">C&#39;est parti</h2>
      <p>
        Comme tu as pu le voir, tu as gagné tes premiers points d&#39;experience
        et tes premiers niveaux grâce au quizz.
      </p>
      <p>
        Pour pouvoir passer tes prochains niveaux, tu vas devoir enregistrer les
        dépôts de tes differents dêchets grâce au boutons &#34;déposer&#34;
        disponible sur chaque marqueur de la carte &#34;points de dêpots&#34;.
      </p>
    </div>
  );
};

export default WorkInProgress;
