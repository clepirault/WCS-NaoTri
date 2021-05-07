import React from 'react';
import './ReglesDuJeu.css';
import dice from '../images/dice.svg';

const WorkInProgress = () => {
  return (
    <div className="rules-container">
      <img alt="" src={dice} />
      <h1 className="punder">regles du jeu</h1>
      <h2>Bienvenue sur Naotri, prêt a devenir un éco-citoyen aguéri ?</h2>
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
      <p>
        L&#39;application ne validera ton dêpot que si elle enregistre ta
        position à moins de 50 mètres de celui-ci.
      </p>
      <p>
        À chaque dêpot qui sera validé, tu vas donc remporter des points
        d&#39;expériences qui te feront monter en niveau. Et a chaque passage de
        niveau tu va remporter des points cumulables, que tu pourras dépenser
        dans les différents magasins partenaires de Naotri !
      </p>
      <p>N&#39;attends pas et fonce déposer tes dêchets ! :)</p>
    </div>
  );
};

export default WorkInProgress;
