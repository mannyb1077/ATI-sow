import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import EquipmentPage from "./pages/equipment/equipment.component";
import Header from "./components/header/header-component";

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
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/Equipment' component={EquipmentPage} />
        <Route path='/Shades' component={ShadesPage} />
        <Route path='/Security' component={SecurityPage} />
      </Switch>
    </div>
  );
}

export default App;
