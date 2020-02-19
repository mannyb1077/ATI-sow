import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

import "./job-summary.styles.scss";

//Displays cart item in a single card in pages/job-summary-item component
const JobSummaryItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, itemName, type, size, quantity } = cartItem;
  return (
    <div className='job-summary-item'>
      <span className='name'> Room Name Goes Here!</span>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='item'> {itemName} </span>
      <span className='type'>{type}</span>
      <span className='size'>{size}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          {" "}
          &#10094;{" "}
        </div>
        <span className='value'> {quantity} </span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          {" "}
          &#10095;{" "}
        </div>
      </span>

      {/* &#1005; = x */}
      <span className='delete-button' onClick={() => clearItem(cartItem)}>
        X
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(JobSummaryItem);
