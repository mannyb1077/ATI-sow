import React from "react";

import SubmitButton from "../submit-button/submit-button.component";

class RoomSubmit extends React.Component {
  previous = event => {
    event.preventDefault();
    this.props.previousQuestion();
  };
  render() {
    const {
      values: { roomName, roomNotes, clientName }
    } = this.props;
    return (
      <div className='add-room'>
        <h1>Review Room Details</h1>
        <span>
          Press Next to add {roomName} to {clientName}
        </span>

        <ul class='breadcrumb'>
          <li class='breadcrumb-item'>{roomName}</li>
          <li class='breadcrumb-item active'>{roomNotes}</li>
        </ul>

        <br />
        <br />
        <div className='buttons'>
          <SubmitButton type='submit' onClick={this.previous} inverted>
            Previous
          </SubmitButton>
          <SubmitButton type='submit' onClick={this.continue} inverted>
            Next
          </SubmitButton>
        </div>
      </div>
    );
  }
}

export default RoomSubmit;
