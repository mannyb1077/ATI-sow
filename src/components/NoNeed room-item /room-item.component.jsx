//////May Not Need it //////////////

import React from "react";

import "./room-item.styles.scss";

const RoomNameComponent = ({ roomNames }) => (
  <div className='room-item-page'>
    <div className='item-details'>
      <span className='name'>{roomNames}</span>
    </div>
  </div>
);

export default RoomNameComponent;
