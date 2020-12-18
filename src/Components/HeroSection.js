import React, { useState } from "react";
import "./HeroSection.css";
import sliderImage1 from "./files/sliderImages/1.jpg";
import sliderImage2 from "./files/sliderImages/2.jpg";
import sliderImage3 from "./files/sliderImages/3.jpg";
import sliderImage4 from "./files/sliderImages/4.jpg";
import sliderImage5 from "./files/sliderImages/5.jpg";

import ForwardArrow from "./files/forward.png";
import BackArrow from "./files/back.png";
import { Button } from "@material-ui/core";

const HeroSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [sliderImages, setSliderImages] = useState([
    sliderImage1,
    sliderImage2,
    sliderImage3,
    sliderImage4,
    sliderImage5,
  ]);

  function sliderImageSetter(arg) {
    if (slideIndex >= 0 && slideIndex <= 4) {
      return arg[slideIndex];
    }
  }

  function increment() {
    setSlideIndex((prevIndex) => prevIndex + 1);
  }

  function decrement() {
    setSlideIndex((prevIndex) => prevIndex - 1);
  }

  return (
    <div className="hero">
      <div className="slider">
        <Button
          disabled={slideIndex === 0}
          onClick={decrement}
          className="slider__controller slider__controllerBack"
        >
          <img className="slider__arrows" src={BackArrow} alt="<" />
        </Button>
        <img src={sliderImageSetter(sliderImages)} />
        <Button
          disabled={slideIndex === 4}
          onClick={increment}
          className="slider__controller slider__controllerForw"
        >
          <img className="slider__arrows" src={ForwardArrow} alt=">" />
        </Button>
      </div>
      <div className="slider__fade"></div>
    </div>
  );
};

export default HeroSection;
