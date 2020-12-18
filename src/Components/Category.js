import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Product = ({
  categotyTitle,
  imgUrl,
  redirectUrl,
  linkText,
  row2CategoryClass,
}) => {
  return (
    <div className={`category ${row2CategoryClass && "row2__category"}`}>
      <h3>{categotyTitle}</h3>
      <Link to={redirectUrl}>
        <div
          className="category__image"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      </Link>

      <Link to={redirectUrl}>{linkText}</Link>
    </div>
  );
};

export default Product;
