import SliderComponent from './components/SliderComponent';
import Quiz from './components/Quiz';
import logoNaotri from './components/logoNaotri.png';
import trash from './components/trash.png';
import trophy from './components/trophy.png';
import shopping from './components/shopping.png';
import bottle from './components/bottle.png';
import robinet from './components/robinet.png';
import totebag from './components/totebag.png';
import plasticbag from './components/plasticbag.png';
import don from './components/don.png';
import benne from './components/benne.png';

const sliderItems = [
  {
    image: logoNaotri,
    description: 'Trie tes déchets de manière ludique!',
  },
  {
    image: trash,
    description: 'Trouve les points de collecte les plus proches de chez toi !',
  },
  {
    image: trophy,
    description: 'Relève des défis et gagne des points!',
  },
  {
    image: shopping,
    description:
      'Echange tes points contre des réductions dans tes enseignes préférées!',
  },
];

const quizQuestions = [
  {
    question: 'Quand tu as soif tu...',
    image2: bottle,
    answer1: "...cours acheter une bouteille d'eau en plastique",
    image3: robinet,
    answer2: '...prends ta gourde et la remplis au robinet ?',
  },
  {
    question: 'Quand tu vas faire les courses tu...',
    image2: totebag,
    answer1: '...utilises un cabas ou un tot bag',
    image3: plasticbag,
    answer2: '...achètes un sac plastique à chaque fois ?',
  },
  {
    question: 'Quand tes vêtements ne sont plus à ton goût tu...',
    image2: benne,
    answer1: '...les jettes, bon débarras !',
    image3: don,
    answer2:
      '...les déposes à une benne de recyclage ou les donnes à une association ?',
  },
];

function App() {
  return (
    <div>
      {sliderItems.map((sliderItem) => (
        <SliderComponent {...sliderItem} />
      ))}
      {quizQuestions.map((quizQuestion) => (
        <Quiz {...quizQuestion} />
      ))}
    </div>
  );
}

export default App;
