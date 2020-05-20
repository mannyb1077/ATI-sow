import React from "react";
import { connect } from "react-redux";
import EquipmentSingleItem from "../../components/equipment-single-item/equipment-single-item.coponents";
import { selectCollection } from "../../redux/equipment/equipment.selectors";

import "./collection.styles.scss";

//Select Specific Equipment by category to add to room
const CollectionPage = ({ collection }) => {
  const { title, items, selected } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title} Options</h2>
      <div className='items'>
        {items.map((item) => (
          <EquipmentSingleItem key={item.id} item={item} selected={selected} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
