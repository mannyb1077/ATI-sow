import React from "react";
import { connect } from "react-redux";
import { addRoom, deleteRoom } from "../../redux/house/house.actions";

import "./room-summary.styles.scss";

//Displays room item in a single card in pages/room-summary-item component
const RoomSummaryItem = ({ room, deleteRoom }) => {
  const {
    roomName,
    tvZone,
    projectorZone,
    cameraZone,
    audioZone,
    dataZone,
  } = room;

  return (
    <div className='room-summary-item'>
      <span className='room'> {roomName}</span>
      <span className='tv'> {tvZone} </span>
      <span className='projector'>{projectorZone}</span>
      <span className='audio'>{audioZone}</span>
      <span className='camera'>{cameraZone}</span>
      <span className='data'>{dataZone}</span>

      <span className='delete-button' onClick={() => deleteRoom(room)}>
        {/* <span role='img' aria-label='Snowman'>
          Edit
        </span> */}
        <span role='img' aria-label='Snowman'>
          &#10060;
        </span>
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addRoom: (room) => dispatch(addRoom(room)),
  deleteRoom: (room) => dispatch(deleteRoom(room)),
});

export default connect(null, mapDispatchToProps)(RoomSummaryItem);
