import React from "react";
import { deleteRoom } from "../../redux/actions/room.actions";
import { connect } from "react-redux";

import SubmitButton from "../submit-button/submit-button.component";
import "./room-name-buttons.styles.scss";

const RoomNameButton = ({ room: { title, id, roomName } }) => (
  <div className='cart-item'>
    <div className='room-preview-buttons'>
      <span className='delete-button' onClick={() => deleteRoom(id)}>
        <span role='img' aria-label='Snowman'>
          &#10060;
        </span>
      </span>
      <SubmitButton>{title}</SubmitButton>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  deleteRoom: id => dispatch(deleteRoom(id))
});

export default connect(null, mapDispatchToProps)(RoomNameButton);
