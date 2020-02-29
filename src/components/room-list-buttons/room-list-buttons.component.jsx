import React from "react";
import { deleteRoom } from "../../redux/house/house.actions";
import { connect } from "react-redux";

import SubmitButton from "../submit-button/submit-button.component";
import "./room-list-buttons.styles.scss";

const RoomListButtons = ({ room: { title, id, roomName, room } }) => (
  <div className='room-list-buttons'>
    <div className='room-preview-buttons'>
      {/* <span className='delete-button' onClick={() => deleteRoom(id)}>
        <span role='img' aria-label='Snowman'>
          &#10060;
        </span>
      </span> */}

      <SubmitButton onClick={() => console.log("trying to edit room")}>
        {title}
      </SubmitButton>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  deleteRoom: id => dispatch(deleteRoom(id))
});

export default connect(null, mapDispatchToProps)(RoomListButtons);
