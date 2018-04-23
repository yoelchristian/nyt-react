import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";

const App = () => (
  <Router>
    <div>
      <Jumbotron />
    </div>
  </Router>
)

export default App;
