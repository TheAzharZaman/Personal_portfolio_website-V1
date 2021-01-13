import React from "react";
import HomePage from "./Pages/Homepage";
import Pricing from "./Pages/Pricing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App__main__container">
      <Router>
        <Switch>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
