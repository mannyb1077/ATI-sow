import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addRoom } from "../../redux/cart/cart.actions";
import FormInput from "../form-input/form-input.component";
import SubmitButton from "../submit-button/submit-button.component";

import "./add-room.styles.scss";

class AddRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomName: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const { room } = this.state;

    try {
      this.setState({ roomName: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  // Displays Add Room Form
  render() {
    return (
      <div className='add-room'>
        <h2>Enter New Room Name</h2>
        <span>Use ML, UL, LL to specify room location</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='roomName'
            type='roomName'
            handleChange={this.handleChange}
            value={this.state.roomName}
            label='Room Name'
            required
          />

          <div className='buttons'>
            <Link className='options' to='/home/equipment'>
              <SubmitButton type='submit'>Add Room</SubmitButton>
            </Link>
            <Link className='options' to='summary'>
              <SubmitButton type='submit'>Do not add Room</SubmitButton>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

// Adds room to Cart
const mapDispatchToProps = dispatch => ({
  addRoom: room => dispatch(addRoom(room))
});

export default connect(null, mapDispatchToProps)(AddRoom);
