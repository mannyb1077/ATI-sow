import React from "react";

import FormInput from "../form-input/form-input.component";
import SubmitButton from "../submit-button/submit-button.component";

class RoomNameQuestion extends React.Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextQuestion();
  };
  previous = (event) => {
    event.preventDefault();
    this.props.previousQuestion();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className='add-room'>
        <h1>Enter New Room Name</h1>
        <span>Use ML, UL, LL to specify room locations</span>

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='roomName'
          value={values.roomName}
          onChange={handleChange("roomName")}
          label='Room Name'
        />
        <br />
        <br />
        <div className='buttons'>
          <SubmitButton type='submit' onClick={this.previous} inverted>
            Previous
          </SubmitButton>
          <SubmitButton type='submit' onClick={this.continue} inverted>
            Next >>
          </SubmitButton>
        </div>
      </div>
    );
  }
}

export default RoomNameQuestion;
