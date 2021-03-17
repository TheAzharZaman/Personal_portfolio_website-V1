import React from "react";
import { Dialog } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "./Popup.css";

const MuiPopup = ({ open, img, alt, closePopup, children }) => {
  return (
    <Dialog open={open} className="projectsImage__popup" maxWidth="lg">
      <Close
        className="projectsImage__popupClose"
        id="projectsImage__popupClose"
        onClick={closePopup}
      />
      <img style={{ width: 1200, maxWidth: "100%" }} src={img} alt={alt} />
    </Dialog>
  );
};

export default MuiPopup;
