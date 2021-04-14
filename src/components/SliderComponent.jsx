import './slider.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function SliderComponent(props) {
  // eslint-disable-next-line react/prop-types
  const { image, description } = props;
  return (
    <div className="Slider">
      <img className="image" src={image} alt="logoappli" />
      <p>{description}</p>
      <div className="arrow-down" />
    </div>
  );
}

export default SliderComponent;
