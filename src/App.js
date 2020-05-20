import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";

import LandingPage from "./pages/landing-page/landing-page-component";
import HomePage from "./pages/homepage/homepage.component";
import EquipmentPage from "./pages/equipment/equipment.component";
import NavBar from "./components/NavBar/NavBar-component";
import LogInPage from "./pages/log-in/log-in.component";
import SignUpPage from "./pages/sign-up/sign-up-component";
//import JobSummaryPage from "./pages/job-summary/job-summary.component";
import RoomSummaryPage from "./pages/room-summary/room-summary.component";
import AddRoomPage from "./pages/add-room-page/add-room-page.component";
import EditRoomNamePage from "./pages/edit-room-name-page/edit-room-name-page.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

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
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            name: snapShot.displayName,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
        console.log(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={HomePage} />
          <Route path='/summary' component={RoomSummaryPage} />
          <Route path='/home/equipment' component={EquipmentPage} />
          <Route exact path='/home/addroom' component={AddRoomPage} />
          <Route exact path='/home/editroom/:id' component={EditRoomNamePage} />
          <Route path='/shades' component={ShadesPage} />
          <Route path='/security' component={SecurityPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/home' /> : <LogInPage />
            }
          />
          <Route
            exact
            path='/signup'
            render={() =>
              this.props.currentUser ? <Redirect to='/home' /> : <SignUpPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

// Tracks Current User
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
