import React from "react";
import EQUIPMENT_DATA from "./equipment.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

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
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default EquipmentPage;
