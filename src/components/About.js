import React from "react";
import "./About.css";
import snapicon from "./snap.png";

const About = () => {
  return (
    <div className="aboutSection">
      <div className="aboutSection__background">
        <div className="aboutSection__content">
          <p className="leftSide__message lsfm">Hey STOP Here! Who are you?</p>
          <p className="rightSide__message rsfm">
            I'm Inevitable{" "}
            <img
              src="https://img.icons8.com/color/100/000000/thanos.png"
              width="30px"
            />
          </p>
          /
          <p className="leftSide__message lssm">
            And I Am Iron... <img src={snapicon} width="15px" />
          </p>
          <p className="rightSide__message rssm">
            Wait! Wait! Just Kiddin', My name is Azhar Zaman <br /> and I'm
            creative front-end-developer.
          </p>
          <p className="leftSide__message lstm">
            What are you doing here in Avengers Headquarter???
          </p>
          <p className="rightSide__message rstm">
            I want you to recruit me in Avengers Team as Front-end-developer;
            <br />
            As I'm specialized in{" "}
            <a href="https://www.javascript.com/" target="_blank">
              JavaScript
            </a>{" "}
            <a href="https://reactjs.org/" target="_blank">
              ReactJs
            </a>{" "}
            <a href="https://www.gatsbyjs.com/" target="_blank">
              GatsbyJs
            </a>{" "}
            etc.
            <br />
            What do you say?
          </p>
          <p className="leftSide__message lsfourthm">
            Good! but I can't help you, coz I am dead,
            <br /> Captain might help you!!!
          </p>
          <p className="rightSide__message rsfourthm">
            Well! Nice to Meet you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
