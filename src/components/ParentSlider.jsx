/* eslint-disable react/prop-types */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import './slider.css';

function ParentSlider(props) {
  const slideToShow = props.sliderItems.filter((slide) => {
    return slide.id === props.currentSlide;
  });
  return (
    <>
      <br />
      {slideToShow.length <= 0 ? (
        <div>No more slides</div>
      ) : (
        <div>
          <div className="Slider">{slideToShow[0].title}</div>
          <img className="image" src={slideToShow[0].image} alt="imageSlider" />
          <div>{slideToShow[0].description}</div>
        </div>
      )}
      <br />
    </>
  );
}

export default ParentSlider;
