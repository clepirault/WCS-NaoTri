import SliderComponent from './components/SliderComponent';
import logoNaotri from './components/logoNaotri.png';
import poubelle from './components/poubelle.png';
import loupe from './components/loupe.png';
import shopping from './components/shopping.png';

const sliderItems = [
  {
    title: 'NAOTRI',
    image: logoNaotri,
    description: 'Trie tes déchets de manière ludique!',
  },
  {
    title: '',
    image: poubelle,
    description: 'Trouve les points de collecte les plus proches de chez toi !',
  },
  {
    title: '',
    image: loupe,
    description: 'Relève des défis et gagne des points!',
  },
  {
    title: '',
    image: shopping,
    description:
      'Echange tes points contre des réductions dans tes enseignes préférées!',
  },
];

function App() {
  return (
    <div>
      {sliderItems.map((sliderItem) => (
        <SliderComponent {...sliderItem} />
      ))}
    </div>
  );
}

export default App;
