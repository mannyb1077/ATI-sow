import React from "react";
import SubmitButton from "../../submit-button/submit-button.component";

class PhoneDataQuestion extends React.Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextQuestion();
  };
  previous = (event) => {
    event.preventDefault();
    this.props.previousQuestion();
  };
  render() {
    const { values, handleCheck } = this.props;
    return (
      <div className='add-room'>
        <h1>Is there a Phone or Data location in this room?</h1>
        <span></span>
        <br />
        <br />
        <h2>Phone:</h2>
        <input
          type='checkbox'
          name='phoneLocation'
          value={values.phoneLocation}
          checked={this.props.phoneLocation}
          onChange={handleCheck("phoneLocation")}
          label
        />
        <label htmlFor=''>Phone Jack</label>
        <br />
        <h2>Data:</h2>
        <input
          type='checkbox'
          name='dataLocation'
          value={values.dataLocation}
          checked={this.props.dataLocation}
          onChange={handleCheck("dataLocation")}
        />
        <label htmlFor=''>Data Jack</label>
        <br />
        <h2>Access Point:</h2>
        <input
          type='checkbox'
          name='apLocation'
          value={values.apLocation}
          checked={this.props.apLocation}
          onChange={handleCheck("apLocation")}
        />
        <label htmlFor=''>Access Point Location</label>
        <br />
        <input
          type='checkbox'
          name='apPowerLocation'
          value={values.apPowerLocation}
          checked={this.props.apPowerLocation}
          onChange={handleCheck("apPowerLocation")}
        />
        <label htmlFor=''>Power at Access Point location</label>
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

export default PhoneDataQuestion;
