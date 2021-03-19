import React, { useEffect, useState } from "react";
import Logo from "./logo.png";
import { Link } from "react-scroll";
import CoachingPrivateLink from "./CoachingPrivateLink";
import "./Header.css";
import { AppBar, Toolbar, Grid } from "@material-ui/core";

function HeaderSection() {
  return (
    <AppBar position="static" className="mainHeader">
      <Toolbar>
        <Grid container alignItems="center" justify="center" spacing={2}>
          <Grid
            item
            container
            className="headerLogo__section"
            xs={12}
            md={1}
            alignItems="center"
            justify="center"
          >
            <Link to="/">
              <img className="mainHeader__logo" src={Logo} width="90px" />
            </Link>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justify="flex-end"
            xs={12}
            md
            className="headerNav__section"
          >
            <Grid item container alignItems="center" justify="center">
              <ul
                item
                className="headerMenu"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "17",
                }}
              >
                <li>
                  <Link
                    className="Nav-items Pointer"
                    to="aboutSection__dest"
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
                </li>
                <CoachingPrivateLink />
              </ul>
            </Grid>
            <Grid item container alignItems="center" justify="center">
              <button className="Nav-button" id="navBtn">
                <a
                  href="https://drive.google.com/drive/folders/1cgp8E20b4k92YG5TFFZpp8LjpmrS2470?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderSection;
