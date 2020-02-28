import React from "react";
import { Route } from "react-router-dom";

import EquipmentOverview from "../../components/equipment-overview/equipment-overview.component";
import CollectionPage from "../collection/collection.component";

const EquipmentPage = ({ match }) => {
  return (
    <div className='equipment-page'>
      <div>
        <h1>"This is the Equipment Page"</h1>
      </div>
      <Route exact path={`${match.path}`} component={EquipmentOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      {/* <EquipmentOverview /> */}
    </div>
  );
};

export default EquipmentPage;
