import React from "react";
import FormInput from "../../form-input/form-input.component";
import SubmitButton from "../../submit-button/submit-button.component";

class AudioQuestions extends React.Component {
  continue = event => {
    event.preventDefault();
    this.props.nextQuestion();
  };
  previous = event => {
    event.preventDefault();
    this.props.previousQuestion();
  };
  render() {
    const { values, handleCheck, handleChange } = this.props;
    return (
      <div className='add-room'>
        <h1>Please select all that Apply</h1>
        <span></span>
        <br />
        <br />
        <h2>TV:</h2>
        <input
          type='checkbox'
          name='newTV'
          value={values.newTV}
          checked={this.props.newTV}
          onChange={handleCheck("newTV")}
          label
        />
        <label htmlFor=''>New TV</label>
        <br />
        <input
          type='checkbox'
          name='customerProvidedTV'
          value={values.customerProvidedTV}
          checked={this.props.customerProvidedTV}
          onChange={handleCheck("customerProvidedTV")}
          label
        />
        <label htmlFor=''>Customer Provided TV</label>
        <br />

        <h2>TV Mount:</h2>
        <input
          type='checkbox'
          name='newTvMount'
          value={values.newTvMount}
          checked={this.props.newTvMount}
          onChange={handleCheck("newTvMount")}
          label
        />
        <label htmlFor=''>New TV Mount</label>
        <br />

        <input
          type='checkbox'
          name='customerProvidedTvMount'
          value={values.customerProvidedTvMount}
          checked={this.props.customerProvidedTvMount}
          onChange={handleCheck("customerProvidedTvMount")}
          label
        />
        <label htmlFor=''>Customer Provided TV Mount</label>
        <br />

        <h2>Mount Type:</h2>
        <input
          type='checkbox'
          name='mountFlat'
          value={values.tvLift}
          checked={this.props.mountFlat}
          onChange={handleCheck("mountFlat")}
          label
        />
        <label htmlFor=''>Flat Mount</label>
        <br />
        <input
          type='checkbox'
          name='mountTilt'
          value={values.tvLift}
          checked={this.props.mountTilt}
          onChange={handleCheck("mountTilt")}
          label
        />
        <label htmlFor=''>Tilt Mount</label>
        <br />
        <input
          type='checkbox'
          name='mountArticulating'
          value={values.mountArticulating}
          checked={this.props.mountArticulating}
          onChange={handleCheck("mountArticulating")}
          label
        />
        <label htmlFor=''>Articulating Mount</label>
        <br />
        <input
          type='checkbox'
          name='mountTvStand'
          value={values.mountTvStand}
          checked={this.props.mountTvStand}
          onChange={handleCheck("mountTvStand")}
          label
        />
        <label htmlFor=''>TV Stand</label>
        <br />
        <input
          type='checkbox'
          name='mountTvLift'
          value={values.mountTvLift}
          checked={this.props.mountTvLift}
          onChange={handleCheck("mountTvLift")}
          label
        />
        <label htmlFor=''>TV Lift</label>

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='mountOther'
          value={values.mountOther}
          onChange={handleChange("mountOther")}
          label='Other Mount Type'
          required
        />

        <h2>Pocket:</h2>
        <input
          type='checkbox'
          name='tvPocket'
          value={values.tvPocket}
          checked={this.props.tvPocket}
          onChange={handleCheck("tvPocket")}
          label
        />
        <label htmlFor=''>TV going in a Pocket</label>
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

export default AudioQuestions;
