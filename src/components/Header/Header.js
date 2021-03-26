import React, { useEffect, useState } from "react";
import Logo from "./logo.png";
import { Link } from "react-scroll";
import { AppBar, Grid, Tabs, Tab } from "@material-ui/core";
import useStateValue from "../../Files/Context/StateProvider";
import { tabIndexToName, tabNameToIndex } from "../../Files/utiils";
import { useHistory } from "react-router-dom";
import "./Header.css";

function HeaderSection() {
  const [{ activeTabIndex, activeViewSlug }, dispatch] = useStateValue();

  const [selectedTab, setSelectedTab] = useState(
    tabNameToIndex[activeViewSlug]
      ? tabNameToIndex[activeViewSlug]
      : activeTabIndex
  );

  console.log(tabNameToIndex[activeViewSlug]);
  console.log(selectedTab);

  const [desktopHeader, setDesktopHeader] = useState(true);

  const history = useHistory();

  // Tab Changing Mechs

  useEffect(() => {
    setSelectedTab(tabNameToIndex[activeViewSlug]);
    dispatch({
      type: "SET_ACTIVE_TAB_INDEX",
      index: tabNameToIndex[activeViewSlug],
    });
  }, [tabNameToIndex, activeViewSlug]);

  const handleTabChange = (e, newValue) => {
    history.push(`/${tabIndexToName[newValue]}`);
    setSelectedTab(newValue);
    dispatch({
      type: "SET_ACTIVE_TAB_INDEX",
      index: newValue,
    });
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
