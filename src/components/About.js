import React from "react";
import { Divider, Grid } from "@material-ui/core";
import "./About.css";

const About = () => {
  return (
    <div className="aboutSection">
      <Grid container justify="center" alignItems="center">
        <Grid className="aboutSection__left" style={{}} item xs={12} md={5}>
          <div className="aboutSection__leftBg">
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            </p>
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            </p>
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            </p>
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            </p>
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            </p>
          </div>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid className="aboutSection__right" item xs={12} md={5}>
          <div className="aboutSection__rightBg">
            <p className="p2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            </p>
            <p className="p2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            </p>
            <p className="p2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            </p>
            <p className="p2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            </p>
            <p className="p2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
