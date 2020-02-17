import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import SubmitButton from "../../components/submit-button/submit-button.component";

import "./equipment-single-item.styles.scss";

const EquipmentSingleItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='equipment-single-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='equipment-single-item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <SubmitButton onClick={() => addItem(item)} inverted>
        {" "}
        Add to Room{" "}
      </SubmitButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(EquipmentSingleItem);
