import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/images/ati.svg";

import "./NavBar-styles.scss";

const NavBar = ({ currentUser }) => (
  <div className='nav-bar'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='options' to='equipment'>
        Equipment
      </Link>
      <Link className='options' to='contact'>
        Contact
      </Link>
      {currentUser ? (
        <div className='options' onClick={() => auth.signOut()}>
          SignOut
        </div>
      ) : (
        <Link className='options' to='/signin'>
          SignIn
        </Link>
      )}
    </div>
  </div>
);

export default NavBar;
