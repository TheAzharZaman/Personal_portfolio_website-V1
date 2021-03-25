import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initialState, reducer } from "./Files/Context/reducer";
import { StateProvider } from "./Files/Context/StateProvider";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

let rootDirectory = document.getElementById("Root");

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  rootDirectory
);

serviceWorker.unregister();
