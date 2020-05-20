import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SubmitButton from "../submit-button/submit-button.component";
import { deleteRoom } from "../../redux/house/house.actions";
import "./room-list-buttons.styles.scss";

const RoomListButtons = ({ deleteRoom, room }) => {
  const { id, roomName } = room;

  return (
    <div className='room-list-buttons'>
      <div className='room-preview-buttons'>
        <Link className='edit' to={`/home/editroom/${id} `}>
          <SubmitButton>{roomName}</SubmitButton>
        </Link>
        <span className='delete-button'>
          <span
            role='img'
            aria-label='Snowman'
            onClick={() => deleteRoom(room)}
          >
            🗑️
          </span>
        </span>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteRoom: (room) => dispatch(deleteRoom(room)),
});

export default connect(null, mapDispatchToProps)(RoomListButtons);
