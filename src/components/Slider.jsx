/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import ParentSlider from './ParentSlider';
import naotrilogonob1 from '../images/naotrilogonob1.png';
import trashnobg from '../images/trashnobg.png';
import trophy2nobg from '../images/trophy2nobg.png';
import shoppingbagnobg from '../images/shoppingbagnobg.png';
import ChildSlider from './ChildSlider';
import './slider.css';

const defaultSlide = 1;
const sliderItems = [
  {
    id: 1,
    title: 'NAOTRI',
    image: naotrilogonob1,
    description: 'Trie tes déchets de manière ludique!',
  },
  {
    id: 2,
    title: 'NAOTRI',
    image: trashnobg,
    description: 'Trouve les points de collecte les plus proches de chez toi !',
  },
  {
    id: 3,
    title: 'NAOTRI',
    image: trophy2nobg,
    description: 'Relève des défis et gagne des points!',
  },
  {
    id: 4,
    title: 'NAOTRI',
    image: shoppingbagnobg,
    description:
      'Echange tes points contre des réductions dans tes enseignes préférées!',
  },
];

function Slider(props) {
  const [currentSlide, setCurrentSlide] = useState(defaultSlide);
  useEffect(() => {
    props.setShowFooter(false);
    return () => {
      props.setShowFooter(true);
    };
  }, []);
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
