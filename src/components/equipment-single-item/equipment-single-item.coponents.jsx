import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import SubmitButton from "../../components/submit-button/submit-button.component";

import "./equipment-single-item.styles.scss";

//Creates equipmnent single item component
const EquipmentSingleItem = ({ item, addItem }) => {
  const { itemName, imageUrl, type } = item;
  return (
    <div className='equipment-single-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      {/* Displays Item Information at bottom of item */}
      <div className='equipment-single-item-footer'>
        <span className='type'>{type}</span>
        <span className='name'>{itemName}</span>
        {/* <span className='size'>{size}</span> */}
      </div>

      {/* Adds Add to Room button at equipment single item component */}
      <SubmitButton onClick={() => addItem(item)} inverted>
        {" "}
        Add to Room
      </SubmitButton>
    </div>
  );
};

// Adds single item to Cart
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(EquipmentSingleItem);
