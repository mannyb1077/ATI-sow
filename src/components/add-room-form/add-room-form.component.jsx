import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "uuid";
//import PropTypes from "prop-types";

import { addRoom } from "../../redux/house/house.actions";
import FormInput from "../form-input/form-input.component";
import SubmitButton from "../submit-button/submit-button.component";

import "./add-room-form.styles.scss";

class AddNewRoomToCart extends React.Component {
  //const AddNewRoomToCart = props => {
  constructor(props) {
    super(props);

    this.state = {
      roomName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    event.preventDefault();

    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const rooms = this.state.roomName;
    const room = {
      id: uuid(),
      roomName: rooms,
      title: rooms,
      equipment: [],
      roomNotes: "Notes related to room will go here"
    };

    this.props.dispatch(addRoom(room));

    this.setState({ roomName: "" });
  };

  render() {
    return (
      <div className='add-room'>
        <h2>Enter New Room Name</h2>
        <span>Use ML, UL, LL to specify room locations</span>

        <form className='add-room' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='roomName'
            value={this.state.roomName}
            handleChange={this.handleChange}
            label='Room Name'
            required
          />

          <div className='buttons'>
            <SubmitButton type='submit'>Add Room</SubmitButton>

            <Link className='options' to='summary'>
              <SubmitButton type='submit'>Do not add Room</SubmitButton>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addRoom: room => dispatch(addRoom(room))
});

export default connect(mapDispatchToProps)(AddNewRoomToCart);
