import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../static/SliderHome.css"
import slider1 from "../static/images/slider1.jpg"
import slider2 from "../static/images/corporate_blog.jpg"
import slider3 from "../static/images/cybersecurity_blog.jpg"

function SliderHome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="home-slider-container">
      <div className="slider-container">
        <Slider {...settings}>
          <div  className="sliderimgdiv">
            <img src={slider1} alt="slider"></img>
          </div>
          <div className="sliderimgdiv">
            <img src={slider2} alt="slider"></img>
          </div>
          <div className="sliderimgdiv">
            <img src={slider3} alt="slider"></img>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SliderHome;
