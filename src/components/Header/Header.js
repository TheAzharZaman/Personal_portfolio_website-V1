import React, { useEffect, useState } from "react";
import Logo from "./logo.png";
import { Link } from "react-scroll";

function HeaderSection() {
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 600) {
  //       setShow(true);
  //       widthAdjuster();
  //     } else {
  //       setShow(false);
  //     }

  //     return () => {
  //       window.removeEventListener("scroll");
  //     };
  //   });

  //   function widthAdjuster() {
  //     let headerLogo = document.getElementById("Logo");
  //     let navUL = document.getElementById("header__UL");
  //     let navButton = document.getElementById("navBtn");

  //     headerLogo.classList.replace("Logo", "Nav__logo__onScroll");
  //     navButton.classList.add("Nav__button__onScroll");
  //     navUL.classList.add("Nav__ul__onScroll");

  //     console.log(headerLogo.classList);
  //     console.log(navButton.classList);
  //     console.log(navUL.classList);
  //   }
  // }, []);

  return (
    <div className={`Header-wrapper`}>
      {/* ${show && "headerWrapper__onScroll"}` */}
      <div className="Logo-section">
        <a href="https://azharzaman.com">
          <img className="Logo" id="Logo" src={Logo} alt="logo"></img>
        </a>
      </div>
      <div className="Nav-section">
        <ul className="Ul hello" id="header__UL">
          <li>
            <Link
              className="Nav-items Pointer"
              to="about-dest"
              smooth={true}
              duration={1000}
            >
              <span>01-</span>
              About
            </Link>
          </li>
          <li>
            <Link
              className="Nav-items Pointer"
              to="Experience-dest"
              smooth={true}
              duration={1150}
            >
              <span>02-</span> Experience
            </Link>
          </li>
          <li>
            <Link
              className="Nav-items Pointer"
              to="scrollTo__projectsSection"
              smooth={true}
              duration={1700}
            >
              <span>03-</span> Work
            </Link>
          </li>
          <li>
            <Link
              className="Nav-items pointer desktopContact"
              to="Contact-dest"
              smooth={true}
              duration={2100}
            >
              <span>04-</span> Get in Touch
            </Link>
            <Link
              className="Nav-items pointer mobileContact"
              to="Contact-dest"
              smooth={true}
              duration={2100}
            >
              <span>04-</span> Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="Nav-button-section">
        <button className="Nav-button" id="navBtn">
          <a
            href="https://drive.google.com/drive/folders/1cgp8E20b4k92YG5TFFZpp8LjpmrS2470?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default HeaderSection;
