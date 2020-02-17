import React from "react";

import CustomButton from "../submit-button/submit-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>Go to Jobs</CustomButton>
  </div>
);

export default CartDropdown;
