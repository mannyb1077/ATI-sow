import React from "react";
import { selectRooms } from "../../redux/house/house.selector";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import RoomListButtons from "../room-list-buttons/room-list-buttons.component";

import "./room-list.styles.scss";

const RoomList = ({ rooms }) => (
  <div className='room-preview'>
    <div className='rooms'>
      rooms.map(roomName => (
      <RoomListButtons key={roomName.id} room={roomName} />
      ))
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  rooms: selectRooms
});

export default withRouter(connect(mapStateToProps)(RoomList));
