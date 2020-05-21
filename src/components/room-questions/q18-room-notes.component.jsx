import React from "react";
import SubmitButton from "../submit-button/submit-button.component";

class RoomNotesQuestion extends React.Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextQuestion();
  };
  previous = (event) => {
    event.preventDefault();
    this.props.previousQuestion();
  };
  submit = (event) => {
    event.preventDefault();
    this.props.handleSubmit();
  };
  onKeyPress = (event) => {
    if (event.which === 13) {
      event.preventDefault();
      this.props.handleSubmit();
    }
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className='add-room'>
        <h1>Enter notes about the room.</h1>
        <span>Let us know any details about this room.</span>
        <br />
        <textarea
          onSubmit={this.continue}
          type='textBox'
          name='roomNotes'
          value={values.roomNotes}
          onChange={handleChange("roomNotes")}
          label='Room Notes'
        />
        <br />
        <br />
        <div className='buttons'>
          <SubmitButton type='submit' onClick={this.previous} inverted>
            Previous
          </SubmitButton>
          <SubmitButton type='submit' onClick={this.submit} inverted>
            Submit
          </SubmitButton>
          {/* <SubmitButton type='submit' onClick={this.submit}>
            Submit & Done
          </SubmitButton> */}
        </div>
      </div>
    );
  }
}

export default RoomNotesQuestion;
