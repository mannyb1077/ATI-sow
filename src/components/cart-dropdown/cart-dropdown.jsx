import React from "react";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import SubmitButton from "../submit-button/submit-button.component";

import "./cart-dropdown.styles.scss";

// Cart dropdown window
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>
          You haven't added any rooms or equipment to project
        </span>
      )}
    </div>

    {/* Goes to Job Summary Page and closes cart dropdown when Go to job summary button is pressed */}
    <SubmitButton
      onClick={() => {
        history.push("/summary");
        dispatch(toggleCartHidden());
      }}
    >
      Go to Job Summary
    </SubmitButton>
  </div>
);

// Displays cart items in dropdown window.  Cart dropdown does not rerender when state changes with unralated cart items
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

//gets connect component first then passes to withRouter
export default withRouter(connect(mapStateToProps)(CartDropdown));
