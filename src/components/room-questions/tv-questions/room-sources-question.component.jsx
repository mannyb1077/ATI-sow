import React from "react";

import SubmitButton from "../../submit-button/submit-button.component";
import FormInput from "../../form-input/form-input.component";

class RoomSourcesQuestions extends React.Component {
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
          name='distributedSources'
          value={values.distributedSources}
          checked={this.props.distributedSources}
          onChange={handleCheck("distributedSources")}
          label
        />
        <label htmlFor=''>Distrubeted Sources</label>

        <input
          type='checkbox'
          name='localSources'
          value={values.localSources}
          checked={this.props.localSources}
          onChange={handleCheck("localSources")}
          label
        />
        <label htmlFor=''>Local Sources</label>

        <input
          type='checkbox'
          name='dedicatedSourcesInRack'
          value={values.dedicatedSourcesInRack}
          checked={this.props.dedicatedSourcesInRack}
          onChange={handleCheck("dedicatedSourcesInRack")}
          label
        />
        <label htmlFor=''>Dedicated Sources located in equipment room</label>

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='otherSources'
          value={values.otherSources}
          onChange={handleChange("otherSources")}
          label='Other. Please specify'
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

export default RoomSourcesQuestions;
