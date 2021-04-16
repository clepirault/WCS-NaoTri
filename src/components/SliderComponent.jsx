import './slider.css';

function SliderComponent(props) {
  // eslint-disable-next-line react/prop-types
  const { image, description } = props;
  return (
    <div className="Slider">
      <img className="image" src={image} alt="logoappli" />
      <p>{description}</p>
      <div id="arrow" className="arrow-down" />
    </div>
  );
}

export default SliderComponent;
