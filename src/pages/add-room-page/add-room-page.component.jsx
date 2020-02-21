import React from "react";
import AddRoom from "../../components/add-room/add-room.component";

//import RoomPreview from " ";

import "./add-room-page.styles.scss";

// Displays Add Room Page by grabing info from component/add-room/add-room.component
const AddRoomPage = () => (
  <div className='add-room-page'>
    <div className='add-room'>
      <AddRoom />
    </div>
  </div>
);

export default AddRoomPage;
