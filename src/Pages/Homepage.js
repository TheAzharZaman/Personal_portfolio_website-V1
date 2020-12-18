import React from "react";
import Header from "../Components/Header";
import HeaderSecondary from "../Components/HeaderSecondary";
import HeroSection from "../Components/HeroSection";
import "./Homepage.css";
import Category from "../Components/Category";

import img1 from "../Components/files/categoriesImages/g.jpg";
import img2 from "../Components/files/categoriesImages/cas.jpg";
import img3 from "../Components/files/categoriesImages/hd.jpg";
import img4 from "../Components/files/categoriesImages/start.jpg";
import img5 from "../Components/files/categoriesImages/elec.jpg";
import img6 from "../Components/files/categoriesImages/promoti.jpg";
import img7 from "../Components/files/categoriesImages/abs.jpg";
import promo from "../Components/files/categoriesImages/prom.jpg";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="home">
      <Header />
      <HeaderSecondary />
      <HeroSection />
      {/* ProductsCategories Row 1 */}
      <div className="categories__row categories__row1 flexRow between">
        <Category
          categotyTitle="Gaming Accessories"
          imgUrl={img1}
          linkText="Shop Now"
        />
        <Category
          categotyTitle="Gaming Accessories"
          imgUrl={img2}
          linkText="Shop Now"
        />
        <Category
          categotyTitle="Gaming Accessories"
          imgUrl={img3}
          linkText="Shop Now"
        />
        <div className="signin__promotion flexColumn">
          <div className="signin flexColumn">
            <h3>Sign in for the best experience</h3>
            <Link>
              <button>Sign in securely</button>
            </Link>
          </div>
          <div
            style={{ backgroundImage: `url(${promo})` }}
            className="promotion"
          ></div>
        </div>
      </div>
      {/* ProductsCategories Row 2 */}

      <div className="categories__row categories__row2 flexRow between">
        <Category
          categotyTitle="Gaming Accessories"
          imgUrl={img4}
          linkText="Shop Now"
          row2CategoryClass
        />
        <Category
          categotyTitle="Gaming Accessories"
          imgUrl={img5}
          linkText="Shop Now"
          row2CategoryClass
        />
        <Category
          categotyTitle="Gaming Accessories"
          imgUrl={img6}
          linkText="Shop Now"
          row2CategoryClass
        />
        <Category
          categotyTitle="Gaming Accessories"
          imgUrl={img7}
          linkText="Shop Now"
          row2CategoryClass
        />
      </div>
    </div>
  );
};

export default Homepage;
