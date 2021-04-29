import React, { useState } from 'react';
import ParentSlider from './ParentSlider';
import logoNaotri from './logoNaotri.png';
import trash from './trash.png';
import trophy from './trophy.png';
import shopping from './shopping.png';
import ChildSlider from './ChildSlider';

const defaultSlide = 1;
const sliderItems = [
  {
    id: 1,
    title: 'NAOTRI',
    image: logoNaotri,
    description: 'Trie tes déchets de manière ludique!',
  },
  {
    id: 2,
    title: 'NAOTRI',
    image: trash,
    description: 'Trouve les points de collecte les plus proches de chez toi !',
  },
  {
    id: 3,
    title: 'NAOTRI',
    image: trophy,
    description: 'Relève des défis et gagne des points!',
  },
  {
    id: 4,
    title: 'NAOTRI',
    image: shopping,
    description:
      'Echange tes points contre des réductions dans tes enseignes préférées!',
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(defaultSlide);

  const handleSlide = (action, slide) => {
    if (
      (slide - 1 < defaultSlide && action === 'Revenir') ||
      (slide + 1 > sliderItems.length && action === 'Suivant')
    ) {
      return setCurrentSlide(slide);
    }
    switch (action) {
      case 'Revenir':
        return setCurrentSlide(slide - 1);
      case 'Suivant':
        return setCurrentSlide(slide + 1);
      default:
        return setCurrentSlide(defaultSlide);
    }
  };

  return (
    <div className="Slider">
      <ParentSlider currentSlide={currentSlide} sliderItems={sliderItems} />
      <ChildSlider getButtonStatus={handleSlide} currentSlide={currentSlide} />
    </div>
  );
}

export default Slider;
