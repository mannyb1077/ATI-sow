import React from "react";
import SubmitButton from "../../submit-button/submit-button.component";

class TvMountQuestions extends React.Component {
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
    const { values, handleCheck } = this.props;
    return (
      <div className='add-room'>
        <h1>Please select all that Apply</h1>
        <span></span>
        <br />
        <br />

        <h2>Mount Type:</h2>
        <input
          type='checkbox'
          name='mountFlat'
          value={values.tvLift}
          checked={this.props.mountFlat}
          onChange={handleCheck("mountFlat")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>Flat Mount</label>
        <br />
        <input
          type='checkbox'
          name='mountTilt'
          value={values.tvLift}
          checked={this.props.mountTilt}
          onChange={handleCheck("mountTilt")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>Tilt Mount</label>
        <br />
        <input
          type='checkbox'
          name='mountArticulating'
          value={values.mountArticulating}
          checked={this.props.mountArticulating}
          onChange={handleCheck("mountArticulating")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>Articulating Mount</label>

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

export default TvMountQuestions;
