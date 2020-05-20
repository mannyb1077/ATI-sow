import React from "react";
import FormInput from "../../form-input/form-input.component";
import SubmitButton from "../../submit-button/submit-button.component";

class ScreenDetails extends React.Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextQuestion();
  };
  previous = (event) => {
    event.preventDefault();
    this.props.previousQuestion();
  };
  render() {
    const { values, handleChange, handleCheck } = this.props;
    return (
      <div className='add-room'>
        <h1>Please select all that Apply?</h1>
        <span></span>

        <h2>Screen Info:</h2>
        <input
          type='checkbox'
          name='screenNew'
          value={values.screenNew}
          checked={this.props.screenNew}
          onChange={handleCheck("screenNew")}
        />
        <label htmlFor=''>New Screen</label>

        <br />
        <input
          type='checkbox'
          name='screenCustomerProvided'
          value={values.screenCustomerProvided}
          checked={this.props.screenCustomerProvided}
          onChange={handleCheck("screenCustomerProvided")}
        />
        <label htmlFor=''>Customer Provided Screen</label>
        <br />

        <h2>Screen 2:</h2>
        <input
          type='checkbox'
          name='screenPerforated'
          value={values.screenPerforated}
          checked={this.props.screenPerforated}
          onChange={handleCheck("screenPerforated")}
        />
        <label htmlFor=''>Perforated Screen</label>
        <br />
        <input
          type='checkbox'
          name='screenLightRejection'
          value={values.screenLightRejection}
          checked={this.props.screenLightRejection}
          onChange={handleCheck("screenLightRejection")}
        />
        <label htmlFor=''>Light Rejection Screen</label>
        <br />

        <h2>Screen 3:</h2>
        <input
          type='checkbox'
          name='screenFixed'
          value={values.screenFixed}
          checked={this.props.screenFixed}
          onChange={handleCheck("screenFixed")}
        />
        <label htmlFor=''>Fixed Screen</label>
        <br />
        <input
          type='checkbox'
          name='screenMotorized'
          value={values.screenMotorized}
          checked={this.props.screenMotorized}
          onChange={handleCheck("screenMotorized")}
        />
        <label htmlFor=''>Motorized Screen</label>
        <br />

        <h2>Screen Details</h2>

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='screenSize'
          value={values.screenSize}
          onChange={handleChange("screenSize")}
          label='Screen Size (Diagonal Dimensions)'
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='screenWidth'
          value={values.screenWidth}
          onChange={handleChange("screenWidth")}
          label='Screen Width'
        />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='screenHeight'
          value={values.screenHeight}
          onChange={handleChange("screenHeight")}
          label='Screen Height'
        />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='throwDistance'
          value={values.throwDistance}
          onChange={handleChange("throwDistance")}
          label='Throw Distance (from projector lens to Screen location)'
        />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='screenGain'
          value={values.screenGain}
          onChange={handleChange("screenGain")}
          label='Screen Gain'
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='projectorNotes'
          value={values.projectorNotes}
          onChange={handleChange("projectorNotes")}
          label='Notes'
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

export default ScreenDetails;
