import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./job-summary.styles.scss";

//Displays cart item in a single card in pages/job-summary-item component
const JobSummaryItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const {
    roomName,
    imageUrl,
    tvZone,
    projectorZone,
    cameraZone,
    newTV,
  } = cartItem;
  return (
    <div className='job-summary-item'>
      <span className='room'> {roomName}</span>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='item'> {tvZone} </span>
      <span className='type'>{projectorZone}</span>
      <span className='size'>{cameraZone}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          {" "}
          &#10094;{" "}
        </div>
        <span className='value'> {newTV} </span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          {" "}
          &#10095;{" "}
        </div>
      </span>

      <span className='delete-button' onClick={() => clearItem(cartItem)}>
        <span role='img' aria-label='Snowman'>
          &#10060;
        </span>
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(JobSummaryItem);
