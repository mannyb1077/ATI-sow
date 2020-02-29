import React from "react";

import "./cart-item.styles.scss";

// Item to display in Cart Item dropdown
const CartItem = ({
  item: { imageUrl, type, quantity, itemName, dimensions }
}) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />

    <div className='item-details'>
      <span className='name'>{itemName}</span>
      <span className='type'>{type}</span>
      <span className='quantity'> x {quantity}</span>
      <span className='dimensions'>{dimensions}</span>
    </div>
  </div>
);

export default CartItem;
