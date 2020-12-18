import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Slider = ({
  image_special_id,
  image_box_special_id,
  image_src,
  image_alt,
}) => {
  return (
    <div className="Slider-box" id={image_box_special_id}>
      <img
        className="Slider-img"
        id={image_special_id}
        src={image_src}
        alt={image_alt}
      />
      <FontAwesomeIcon
        className="Slider__close__icon"
        id="Slider__close__icon"
        icon={faWindowClose}
      />
    </div>
  );
};

export default Slider;
