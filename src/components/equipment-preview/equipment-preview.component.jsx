import React from "react";

import EquipmentSingleItem from "../equipment-single-item/equipment-single-item.coponents";
import "./equipment-preview.styles.scss";

const EquipmentPreview = ({ title, items }) => (
  <div className='equipment-preview'>
    <h1 className='title'> {title.toUpperCase()} </h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <EquipmentSingleItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default EquipmentPreview;
