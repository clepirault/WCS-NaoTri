import './slider.css';

function SliderComponent(props) {
  // eslint-disable-next-line react/prop-types
  const { title, image, description } = props;
  return (
    <div className="Slider">
      <h1>{title}</h1>
      <img className="image" src={image} alt="logoappli" />
      <p>{description}</p>
      <input id="next-button" type="button" value="⇩" />
    </div>
  );
}

export default SliderComponent;
