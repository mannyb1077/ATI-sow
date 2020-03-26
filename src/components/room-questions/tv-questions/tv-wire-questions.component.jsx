import React from "react";

import SubmitButton from "../../submit-button/submit-button.component";
import FormInput from "../../form-input/form-input.component";

class WireQuantityQuestions extends React.Component {
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
        <h1>Please tell us what wires we have at TV location from head-end </h1>
        <br />
        <br />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='wireC5Quantity'
          value={values.wireC5Quantity}
          onChange={handleChange("wireC5Quantity")}
          label='How many Cat5 Wires do we have at TV Location?'
          required
        />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='wireC6Quantity'
          value={values.wireC6Quantity}
          onChange={handleChange("wireC6Quantity")}
          label='How many Cat6 Wires do we have at TV Location?'
          required
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='wireCoaxQuantity'
          value={values.wireCoaxQuantity}
          onChange={handleChange("wireCoaxQuantity")}
          label='How many Coax Wires do we have at TV Location?'
          required
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='wireFiberQuantity'
          value={values.wireFiberQuantity}
          onChange={handleChange("wireFiberQuantity")}
          label='How many Fiber Wires do we have at TV Location?'
          required
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='wireSpeakerQuantity'
          value={values.wireSpeakerQuantity}
          onChange={handleChange("wireSpeakerQuantity")}
          label='How many Speaker Wires do we have at TV Location?'
          required
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='wireOtherQuantity'
          value={values.wireOtherQuantity}
          onChange={handleChange("wireOtherQuantity")}
          label='Is there other type of wires?'
          required
        />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='conduitLocation'
          value={values.conduitLocation}
          onChange={handleChange("conduitLocation")}
          label='Is there any conduit?'
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

export default WireQuantityQuestions;
