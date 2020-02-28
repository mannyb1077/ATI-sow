import React from "react";
//import RoomNameComponent from "../room-item/room-item.component";

import { selectRoomsForPreview } from "../../redux/room/room.selector";
import { connect } from "react-redux";

//import SubmitButton from "../submit-button/submit-button.component";

import "./room-list.styles.scss";

// room list side by side with new room form
const RoomList = ({ rooms, roomName }) => {
  //const { room, name } = rooms;
  return (
    <div className='room-page'>
      <h2 className='room-list'>Rooms In Project</h2>
      <span>Select Room To Edit</span>
      <div className='rooms'>
        <span>{}</span>
        {rooms.map(roomName => (
          <div className='list'>
            <button onClick={({ rooms }) => this.joinRoom()}>
              Edit {rooms} Here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = rooms => ({
  rooms: selectRoomsForPreview(rooms)
});

export default connect(mapStateToProps)(RoomList);
