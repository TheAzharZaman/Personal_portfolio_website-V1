import React from "react";
import HomePage from "./Pages/Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Redirect exact from="/" to="/about" />
          <Route
            exact
            path="/:page?"
            render={(props) => <HomePage {...props} />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
