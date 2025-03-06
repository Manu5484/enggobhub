import { useState, useEffect, useCallback } from "react";
import "../static/SliderHome.css"

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "20px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "brightness(60%)",
  transition: "opacity 1.5s ease-in-out",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "90%",
  width: "85%",
  overflow: "hidden",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  bottom: "10px",
  width: "100%",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  color: "white",
};

const SliderHome = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const goToPrevious = () => {
    setFade(false);
    setTimeout(() => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setFade(true);
    }, 750);
  };

  const goToNext = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
      setFade(true);
    }, 750);
  }, [slides.length]);

  const goToSlide = (slideIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(slideIndex);
      setFade(true);
    }, 750);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3500);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div style={sliderStyles}>
      <div className="moto">Find Your Dream Job Now !</div>
      <div onClick={goToPrevious} style={leftArrowStyles}>
        ❰
      </div>
      <div onClick={goToNext} style={rightArrowStyles}>
        ❱
      </div>
      <div
        style={{
          ...slideStyles,
          backgroundImage: `url(${slides[currentIndex].url})`,
          opacity: fade ? 1 : 0.85,
        }}
      ></div>
      <div style={dotsContainerStyles}>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyle}
            onClick={() => goToSlide(slideIndex)}
          >
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderHome;
