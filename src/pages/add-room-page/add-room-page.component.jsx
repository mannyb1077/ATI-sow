import React from "react";
import AddNewRoomToCart from "../../components/add-room-form/add-room-form.component";
import RoomList from "../../components/room-list/room-list.component";

//import RoomPreview from " ";

import "./add-room-page.styles.scss";

// Displays Add Room Page by grabing info from component/add-room/add-room.component
const AddRoomPage = () => (
  <div className='add-room-page'>
    <div className='add-room'>
      <AddNewRoomToCart />
    </div>
    <div className='room-list'>
      <RoomList />
    </div>
  </div>
);

export default AddRoomPage;
