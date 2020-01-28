import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import EquipmentPage from "./pages/equipment/equipment.component";
import NavBar from "./components/NavBar/NavBar-component";
import LogInPage from "./pages/log-in/log-in.component";
import SignUpPage from "./pages/sign-up/sign-up-component";
import { auth } from "./firebase/firebase.utils";

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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/equipment' component={EquipmentPage} />
          <Route path='/shades' component={ShadesPage} />
          <Route path='/security' component={SecurityPage} />
          <Route path='/signin' component={LogInPage} />
          <Route path='/signup' component={SignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
