import React from "react";
import { selectRooms } from "../../redux/selectors/room.selector";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import RoomNameButton from "../room-name-buttons/room-name-buttons.component";

import "./room-list.styles.scss";

const RoomList = ({ rooms }) => (
  <div className='room-preview'>
    <h2>Rooms added to project</h2>
    <span>Click on button to add or remove equipment</span>

    <div className='rooms'>
      {rooms.length ? (
        rooms.map(roomName => (
          <RoomNameButton key={roomName.id} room={roomName} />
        ))
      ) : (
        <span className='empty-message'>
          You don't have any rooms to the project
        </span>
      )}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  rooms: selectRooms
});

export default withRouter(connect(mapStateToProps)(RoomList));
