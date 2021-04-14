import SliderComponent from './components/SliderComponent';
import logoNaotri from './components/logoNaotri.png';
import trash from './components/trash.png';
import trophy from './components/trophy.png';
import shopping from './components/shopping.png';

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
