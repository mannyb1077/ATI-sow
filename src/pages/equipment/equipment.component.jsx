import React from "react";
import { Route } from "react-router-dom";

import EquipmentOverview from "../../components/equipment-overview/equipment-overview.component";
import CollectionPage from "../collection/collection.component";

// Displays Equipment Inventory by grabing EQUIPMENT_DATA from equipment/equipment-data.js
const EquipmentPage = ({ match }) => {
  return (
    <div className='equipment-page'>
      <Route exact path={`${match.path}`} component={EquipmentOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default EquipmentPage;
