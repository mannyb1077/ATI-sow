import React from "react";

import SubmitButton from "../submit-button/submit-button.component";
import FormInput from "../form-input/form-input.component";

class ClientNameQuestion extends React.Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextQuestion();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className='add-room'>
        <h1>Enter Client's Name</h1>

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='clientName'
          value={values.clientName}
          onChange={handleChange("clientName")}
          label='Client Name'
          required
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
