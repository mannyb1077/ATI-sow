import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
//import CartIcon from "../cart-icon/cart-icon.component";
//import CartDropdown from "../cart-dropdown/cart-dropdown";
//import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { ReactComponent as Logo } from "../../assets/images/ati.svg";

import "./NavBar-styles.scss";

const NavBar = ({ currentUser }) => (
  <div className='nav-bar'>
    {currentUser ? (
      <div className='logo-container'>
        <Link className='logo-container' to='/home'>
          <Logo className='logo' />
        </Link>
      </div>
    ) : (
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
    )}

    <div className='options'>
      <navbar-toggler>
        <Link className='options' to='/summary'>
          Summary
        </Link>
        <Link className='options' to='/home/addroom'>
          Back
        </Link>
      </navbar-toggler>

      {currentUser ? (
        <div className='options' onClick={() => auth.signOut()}>
          <Link className='options' to='/'>
            SignOut
          </Link>
        </div>
      ) : (
        <Link className='options' to='/signin'>
          SignIn
        </Link>
      )}
    </div>
  </div>
);

// Allows to toggle user Signed in/sign out and cart icon hide/unhide using Redux
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // hidden: selectCartHidden,
});

export default connect(mapStateToProps)(NavBar);
