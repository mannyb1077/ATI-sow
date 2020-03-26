import React from "react";
import { connect } from "react-redux";

const EditRoomName = props => {
  console.log(props);

  return <div>Editing Room Name for id = {props.match.params.id}</div>;
};

const mapDispatchToProps = (state, props) => {
  return {
    rooms: state.rooms.find(roomName => roomName.id === props.match.params.id)
  };
};

export default connect(mapDispatchToProps)(EditRoomName);
