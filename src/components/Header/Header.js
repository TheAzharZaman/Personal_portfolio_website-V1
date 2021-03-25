import React, { useEffect, useState } from "react";
import Logo from "./logo.png";
import { Link } from "react-scroll";
import "./Header.css";
import { AppBar, Grid, Tabs, Tab } from "@material-ui/core";
import { useStateValue } from "../../Files/Context/StateProvider";

function HeaderSection() {
  const state = useStateValue();
  const [selectedTab, setSelectedTab] = useState(0);
  const [desktopHeader, setDesktopHeader] = useState(true);

  const handleTabChange = (e, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    myFunction(x);
  }, [x]);

  function myFunction(x) {
    if (x.matches) {
      setDesktopHeader(false);
    } else {
      setDesktopHeader(true);
    }
  }

  var x = window.matchMedia("(max-width: 960px)");
  x.addListener(myFunction);

  console.log(desktopHeader);

  return (
    <AppBar className="mainHeader">
      <Grid container alignItems="center" justify="center">
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
            <img className="mainHeader__logo" src={Logo} width="100px" />
          </Link>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify={desktopHeader ? "flex-end" : "center"}
          xs={12}
          md
        >
          <Grid item className="headerMenu">
            <Tabs
              centered
              value={selectedTab}
              variant="standard"
              onChange={handleTabChange}
              aria-label="nav tabs example"
              className="headerNav__tabs"
            >
              <Tab label="About" />
              <Tab label="Experience" />
              <Tab label="Work" />
              <Tab label="Contact" />
              <Tab label="Coaching" />
            </Tabs>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
/*

*/
export default HeaderSection;
