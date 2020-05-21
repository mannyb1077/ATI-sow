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
  onKeyPress = (event) => {
    if (event.which === 13) {
      event.preventDefault();
      this.props.nextQuestion();
    }
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
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>New Screen</label>

        <br />
        <input
          type='checkbox'
          name='screenCustomerProvided'
          value={values.screenCustomerProvided}
          checked={this.props.screenCustomerProvided}
          onChange={handleCheck("screenCustomerProvided")}
          onKeyPress={this.onKeyPress}
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
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>Perforated Screen</label>
        <br />
        <input
          type='checkbox'
          name='screenLightRejection'
          value={values.screenLightRejection}
          checked={this.props.screenLightRejection}
          onChange={handleCheck("screenLightRejection")}
          onKeyPress={this.onKeyPress}
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
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>Fixed Screen</label>
        <br />
        <input
          type='checkbox'
          name='screenMotorized'
          value={values.screenMotorized}
          checked={this.props.screenMotorized}
          onChange={handleCheck("screenMotorized")}
          onKeyPress={this.onKeyPress}
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
          onKeyPress={this.onKeyPress}
          label='Screen Size (Diagonal Dimensions)'
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='screenWidth'
          value={values.screenWidth}
          onChange={handleChange("screenWidth")}
          onKeyPress={this.onKeyPress}
          label='Screen Width'
        />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='screenHeight'
          value={values.screenHeight}
          onChange={handleChange("screenHeight")}
          onKeyPress={this.onKeyPress}
          label='Screen Height'
        />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='throwDistance'
          value={values.throwDistance}
          onChange={handleChange("throwDistance")}
          onKeyPress={this.onKeyPress}
          label='Throw Distance (from projector lens to Screen location)'
        />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='screenGain'
          value={values.screenGain}
          onChange={handleChange("screenGain")}
          onKeyPress={this.onKeyPress}
          label='Screen Gain'
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='projectorNotes'
          value={values.projectorNotes}
          onChange={handleChange("projectorNotes")}
          onKeyPress={this.onKeyPress}
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
