import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./list";
import Detail from "./detail";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
