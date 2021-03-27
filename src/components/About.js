import React from "react";
import { Divider, Grid } from "@material-ui/core";
import "./About.css";

const About = () => {
  return (
    <div className="aboutSection">
      <Grid container justify="center">
        <Grid className="aboutSection__left" item xs={12} md={6}>
          <div className="aboutSection__leftBg">
            <div className="aboutSection__leftContent">
              <p className="leftSide__message lsfm">STOP! Who are you?</p>
              <p className="leftSide__message lssm">and I am Iron...</p>
              <p className="leftSide__message lstm">
                What are you doing here in Avengers Headquarter???
              </p>
              <p className="leftSide__message lsfourthm">
                Good! but I can't help you, coz I am dead,
                <br /> Captain might help you!!!
              </p>
            </div>
          </div>
        </Grid>
        <Grid className="aboutSection__right" item xs={12} md={6}>
          <div className="aboutSection__rightBg">
            <div className="aboutSection__rightContent">
              <p className="rightSide__message rsfm">I'm inevitable</p>
              <p className="rightSide__message rssm">
                Wait! Wait! Just Kiddin', My name is Azhar Zaman <br /> and I'm
                expert front-end-developer
              </p>
              <p className="rightSide__message rstm">
                I want you to recruit me in Avengers Team as
                Front-end-developer;
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
                What you say?
              </p>
              <p className="rightSide__message rsfourthm">
                Well! Nice to Meet you.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
