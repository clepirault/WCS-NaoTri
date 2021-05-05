/* import react from 'react'; */
import './good-habits.css';
import fullgarbage from './fullgarbage.svg';
import recycleplasticbottle from './recycleplasticbottle.svg';
import recyclewater from './recyclewater.svg';
import replantingtrees from './replantingtrees.svg';
import stop from './stop.svg';

const tip1 = `5L d'eau sont nécessaires pour produire une feuille de papier A4. Recycler 1kg de papier permet d'économiser 25L d'eau.`;
const tip2 = `La consommation d'essuie-tout non recyclables représente 134 000 tonnes de déchets par an.`;
const tip3 = `25 millions de bouteilles en plastique par jour vont à la poubelle. Seulement 49% d'entre elles sont recyclées.`;
const tip4 = `Mettre une étiquette "Stop pub" sur sa boite aux lettres. Chaque année nous recevons 40kgs de publicités dans notre boite aux lettres.`;
const tip5 = `Utilise le moteur de recherches Ecosia : grace à tes recherches, tu replantes des arbres.`;

function GoodHabits() {
  return (
    <div className="goodHabit">
      <div>
        <p>{tip1}</p>
        <img src={recyclewater} alt="recyclewater" />
      </div>
      <div>
        <p>{tip2}</p>
        <img src={fullgarbage} alt="fullgarbage" />
      </div>
      <div>
        <p>{tip3}</p>
        <img src={recycleplasticbottle} alt="recycleplasticbottle" />
      </div>
      <h2>Adoptez de bonnes habitudes !</h2>
      <div>
        <p>{tip4}</p>
        <img src={stop} alt="stoppub" />
      </div>
      <div>
        <p>{tip5}</p>
        <img src={replantingtrees} alt="replantingtrees" />
      </div>
    </div>
  );
}

export default GoodHabits;
