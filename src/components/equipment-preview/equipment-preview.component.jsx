import React from "react";

import EquipmentSingleItem from "../equipment-single-item/equipment-single-item.coponents";
import "./equipment-preview.styles.scss";

// Equipment to choose from Equipment Page.  4 items per row
const EquipmentPreview = ({ title, items }) => (
  <div className='equipment-preview'>
    <h1 className='title'> {title.toUpperCase()} </h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <EquipmentSingleItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default EquipmentPreview;
