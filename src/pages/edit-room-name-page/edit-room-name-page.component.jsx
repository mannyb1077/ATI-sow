import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import FormInput from "../../components/form-input/form-input.component";
import SubmitButton from "../../components/submit-button/submit-button.component";

import "./edit-room-name-page.styles.scss";
import roomListButtonsComponent from "../../components/room-list-buttons/room-list-buttons.component";

const EditRoomName = props => {
  return (
    <div className='add-room'>
      <h2>Editing Room id: {props.match.params.id}</h2>
      <h3>Editing Room Name: {props.match.params.rooms} </h3>
      <span>Type New Room Name</span>

      <form className='add-room'>
        <FormInput
          type='text'
          name='roomName'
          value={""}
          handleChange={""}
          label='New Name'
          required
          autoFocus
        />
        <textarea
          className='notes'
          type='text'
          name=''
          id=''
          cols='63'
          rows='10'
          placeholder='Add some notes about this room'
        ></textarea>

        {/* <FormInput
          type='text'
          name='roomNotes'
          value={""}
          handleChange={""}
          label='Room Notes'
        /> */}

        <div className='buttons'>
          <SubmitButton type='submit'>Submit Changes</SubmitButton>
          <Link className='cancel' to={`/home/addroom`}>
            <SubmitButton inverted>Cancel</SubmitButton>
          </Link>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (state, props) => {
  console.log(state.house.rooms);
  return {
    rooms: state.house.rooms.find(
      roomName => roomName.id === props.match.params.id,
      console.log(state.house.rooms)
    )
  };
};

export default connect(mapDispatchToProps)(EditRoomName);
