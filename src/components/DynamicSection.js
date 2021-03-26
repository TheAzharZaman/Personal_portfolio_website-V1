import React from "react";
import "./DynamicSection.css";

const DynamicSection = ({ children }) => {
  return <div className="homepage__dynamicSection">{children}</div>;
};

export default DynamicSection;
