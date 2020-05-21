import React from "react";
import SubmitButton from "../../submit-button/submit-button.component";
import FormInput from "../../form-input/form-input.component";

class TvControlQuestions extends React.Component {
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
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>Control System</label>
        <br />
        <input
          type='checkbox'
          name='iPad'
          value={values.iPad}
          checked={this.props.iPad}
          onChange={handleCheck("iPad")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>iPad/iPhone</label>
        <br />
        <input
          type='checkbox'
          name='keypad'
          value={values.keypad}
          checked={this.props.keypad}
          onChange={handleCheck("keypad")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>Keypad</label>
        <br />
        <input
          type='checkbox'
          name='factoryRemotes'
          value={values.factoryRemotes}
          checked={this.props.factoryRemotes}
          onChange={handleCheck("factoryRemotes")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>Factory Remotes</label>
        <br />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='otherTvControls'
          value={values.otherTvControls}
          onChange={handleChange("otherTvControls")}
          onKeyPress={this.onKeyPress}
          label='Other Control Method. Please specify'
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
