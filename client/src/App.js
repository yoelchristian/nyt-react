import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Articles from "./pages/Articles";

const App = () => (
  <Router>
    <div>
      <Jumbotron />
      <Switch>
        <Route exact path="/" component={Articles} />
      </Switch>
    </div>
  </Router>
)

export default App;
