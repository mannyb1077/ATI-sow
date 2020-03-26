import React from "react";

import SubmitButton from "../../submit-button/submit-button.component";
import FormInput from "../../form-input/form-input.component";

class TvControlQuestions extends React.Component {
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
        <h1>How is customer going to control TV </h1>
        <br />
        <br />
        <input
          type='checkbox'
          name='controlSystem'
          value={values.controlSystem}
          checked={this.props.controlSystem}
          onChange={handleCheck("controlSystem")}
          label
        />
        <label htmlFor=''>Control System</label>
        <input
          type='checkbox'
          name='iPad'
          value={values.iPad}
          checked={this.props.iPad}
          onChange={handleCheck("iPad")}
          label
        />
        <label htmlFor=''>iPad/iPhone</label>

        <input
          type='checkbox'
          name='keypad'
          value={values.keypad}
          checked={this.props.keypad}
          onChange={handleCheck("keypad")}
          label
        />
        <label htmlFor=''>Keypad</label>

        <input
          type='checkbox'
          name='factoryRemotes'
          value={values.factoryRemotes}
          checked={this.props.factoryRemotes}
          onChange={handleCheck("factoryRemotes")}
          label
        />
        <label htmlFor=''>Factory Remotes</label>

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='otherTvControls'
          value={values.otherTvControls}
          onChange={handleChange("otherTvControls")}
          label='Other Control System. Please specify'
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

export default TvControlQuestions;
