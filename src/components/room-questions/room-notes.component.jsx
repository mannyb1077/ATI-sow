import React from "react";

import SubmitButton from "../submit-button/submit-button.component";
import FormInput from "../form-input/form-input.component";

class RoomNotesQuestion extends React.Component {
  continue = event => {
    event.preventDefault();
    this.props.nextQuestion();
  };
  previous = event => {
    event.preventDefault();
    this.props.previousQuestion();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className='add-room'>
        <h1>Enter notes about the room.</h1>
        <span>Let us know any details about this room.</span>
        <FormInput
          onSubmit={this.continue}
          type='textBox'
          name='roomNotes'
          value={values.roomNotes}
          onChange={handleChange("roomNotes")}
          label='Room Notes'
          required
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

export default RoomNotesQuestion;
