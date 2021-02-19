import React from "react";
import { Dialog } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const MuiPopup = ({ open, img, alt, closePopup, children }) => {
  return (
    <Dialog open={open} className="projectsImage__popup" maxWidth="md">
      <Close
        className="projectsImage__popupClose"
        id="projectsImage__popupClose"
        onClick={closePopup}
      />
      <img src={img} alt={alt} />
    </Dialog>
  );
};

export default MuiPopup;
