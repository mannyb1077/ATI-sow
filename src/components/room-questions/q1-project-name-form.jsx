import React from "react";

import SubmitButton from "../submit-button/submit-button.component";
import FormInput from "../form-input/form-input.component";

class ClientNameQuestion extends React.Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextQuestion();
  };
  onKeyPress = (event) => {
    if (event.which === 13) {
      event.preventDefault();
      this.props.nextQuestion();
    }
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div className='add-room'>
        <h1>Enter Client's Name</h1>

        <FormInput
          type='text'
          name='clientName'
          value={values.clientName}
          onChange={handleChange("clientName")}
          onKeyPress={this.onKeyPress}
          label='Client Name'
        />
        <br />
        <br />
        <div className='buttons'>
          <SubmitButton type='submit' onClick={this.continue} inverted>
            Next >>
          </SubmitButton>
        </div>
      </div>
    );
  }
}

export default ClientNameQuestion;
