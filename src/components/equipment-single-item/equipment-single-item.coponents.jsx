import React from "react";

import "./equipment-single-item.styles.scss";

const EquipmentSingleItem = ({ id, name, price, imageUrl }) => (
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
  </div>
);

export default EquipmentSingleItem;
