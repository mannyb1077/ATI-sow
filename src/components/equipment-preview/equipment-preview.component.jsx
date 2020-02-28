import React from "react";
import { Link } from "react-router-dom";
import SubmitButton from "../submit-button/submit-button.component";
//import EquipmentSingleItem from "../equipment-single-item/equipment-single-item.coponents";
import "./equipment-preview.styles.scss";

// Equipment to choose from Equipment Page.  4 items per row
const EquipmentPreview = ({ title, routeName }) => (
  <div className='equipment-preview'>
    <h1 className='title'> {title.toUpperCase()} </h1>

    <div className='overview-page-buttons'>
      <div className='buttons'>
        <Link className='options' to={routeName}>
          <SubmitButton type='submit'>Add {title}</SubmitButton>
        </Link>
        <SubmitButton type='submit'>No {title}</SubmitButton>
      </div>
    </div>
  </div>
);

export default EquipmentPreview;
