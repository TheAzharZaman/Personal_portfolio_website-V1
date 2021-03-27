import React, { useEffect, useState } from "react";
import { Button } from "react-scroll";
import useStateValue from "../Files/Context/StateProvider";
import { tabIndexToName } from "../Files/utiils";
import "./DynamicSection.css";

const DynamicSection = ({ children }) => {
  const [{ activeTabIndex, activeViewSlug }, dispatch] = useStateValue();
  const [sectionSwitch, setSectionSwitch] = useState(true);

  useEffect(() => {
    myFunction(x);
  }, [x]);

  function myFunction(x) {
    if (x.matches) {
      setSectionSwitch(true);
    } else {
      setSectionSwitch(false);
    }
  }
  var x = window.matchMedia("(min-width: 1200px)");
  x.addListener(myFunction);

  const tabIndexIncrement = () => {
    if (activeTabIndex < 4) {
      dispatch({
        type: "SET_ACTIVE_TAB_INDEX",
        index: activeTabIndex + 1,
      });
      dispatch({
        type: "SET_ACTIVE_VIEW_SLUG",
        slug: tabIndexToName[activeTabIndex + 1],
      });
    } else {
      dispatch({
        type: "SET_ACTIVE_TAB_INDEX",
        index: 0,
      });
      dispatch({
        type: "SET_ACTIVE_VIEW_SLUG",
        slug: tabIndexToName[0],
      });
    }
  };

  const tabIndexDecrement = () => {
    if (activeTabIndex > 0) {
      dispatch({
        type: "SET_ACTIVE_TAB_INDEX",
        index: activeTabIndex - 1,
      });
      dispatch({
        type: "SET_ACTIVE_VIEW_SLUG",
        slug: tabIndexToName[activeTabIndex - 1],
      });
    } else {
      dispatch({
        type: "SET_ACTIVE_TAB_INDEX",
        index: 4,
      });
      dispatch({
        type: "SET_ACTIVE_VIEW_SLUG",
        slug: tabIndexToName[4],
      });
    }
  };

  console.log("Active Tab Index", activeTabIndex);
  console.log("Active View Slug", activeViewSlug);

  return (
    <div className="homepage__dynamicSection">
      {sectionSwitch && (
        <img
          className="dynamicSection__control backward"
          src="https://img.icons8.com/fluent/48/000000/chevron-right.png"
          alt="<"
          onClick={tabIndexDecrement}
        />
      )}

      {children}
      {sectionSwitch && (
        <img
          className="dynamicSection__control forward"
          src="https://img.icons8.com/fluent/48/000000/chevron-right.png"
          onClick={tabIndexIncrement}
        />
      )}
    </div>
  );
};

export default DynamicSection;
