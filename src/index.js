import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer, { initialState } from "./Files/Context/reducer";
import { StateProvider } from "./Files/Context/StateProvider";
import { theme } from "./Files/MuiThemes";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

let rootDirectory = document.getElementById("Root");

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>,
  rootDirectory
);

serviceWorker.unregister();
