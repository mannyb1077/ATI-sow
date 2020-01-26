import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const AVPage = () => (
  <div>
    <h1>AV Page</h1>
  </div>
);

const ShadesPage = () => (
  <div>
    <h1>Shades Page</h1>
  </div>
);

const SecurityPage = () => (
  <div>
    <h1>Security Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/AV' component={AVPage} />
        <Route path='/Shades' component={ShadesPage} />
        <Route path='/Security' component={SecurityPage} />
      </Switch>
    </div>
  );
}

export default App;
