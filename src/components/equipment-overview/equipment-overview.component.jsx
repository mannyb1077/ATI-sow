import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/equipment/equipment.selectors";
import EquipmentPreview from "../equipment-preview/equipment-preview.component";

import "./equipment-overview.styles.scss";

const EquipmentOverview = ({ collections }) => (
  <div className='equipment-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <EquipmentPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(EquipmentOverview);
