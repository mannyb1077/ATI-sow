import React from "react";
import EQUIPMENT_DATA from "./equipment.data";
import EquipmentPreview from "../../components/equipment-preview/equipment-preview.component";

// Displays Equipment Inventory by grabing EQUIPMENT_DATA from equipment/equipment-data.js
class EquipmentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: EQUIPMENT_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className='equipment-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <EquipmentPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default EquipmentPage;
