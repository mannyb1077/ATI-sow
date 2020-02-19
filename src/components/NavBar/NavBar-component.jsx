import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { ReactComponent as Logo } from "../../assets/images/ati.svg";

import "./NavBar-styles.scss";

const NavBar = ({ currentUser, hidden }) => (
  <div className='nav-bar'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='options' to='equipment'>
        Equipment
      </Link>
      <Link className='options' to='summary'>
        Summary
      </Link>
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
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

// Allows to toggle user Signed in/sign out and cart icon hide/unhide using Redux
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(NavBar);
