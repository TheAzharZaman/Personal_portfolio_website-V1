import React from "react";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Homepage />
      </Router>
    </div>
  );
};

export default App;
