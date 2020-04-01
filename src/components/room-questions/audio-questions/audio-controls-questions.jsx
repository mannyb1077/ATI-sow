import React from "react";
import FormInput from "../../form-input/form-input.component";
import SubmitButton from "../../submit-button/submit-button.component";

class AudioControls extends React.Component {
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
        <h1>How is customer going to control music in this room?</h1>
        <span></span>
        <br />
        <br />
        <h2>Audio:</h2>
        <input
          type='checkbox'
          name='distributedAudio'
          value={values.distributedAudio}
          checked={this.props.distributedAudio}
          onChange={handleCheck("distributedAudio")}
          label
        />
        <label htmlFor=''>Distributed Audio</label>
        <br />
        <input
          type='checkbox'
          name='dedicatedAudioSource'
          value={values.dedicatedAudioSource}
          onChange={handleChange("dedicatedAudioSource")}
          require
        />
        <label htmlFor=''>Dedicated Audio Source</label>
        <br />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='audioSourceOther'
          value={values.audioSourceOther}
          onChange={handleChange("audioSourceOther")}
          label='Other Audio source (ie. Local Turntable)'
          required
        />

        <h2>Audio Control:</h2>
        <input
          type='checkbox'
          name='audioKeypad'
          value={values.audioKeypad}
          checked={this.props.audioKeypad}
          onChange={handleCheck("audioKeypad")}
          label
        />
        <label htmlFor=''>Audio Keypad</label>
        <br />

        <input
          type='checkbox'
          name='customerProvidedTvMount'
          value={values.audioTouchPanel}
          checked={this.props.audioTouchPanel}
          onChange={handleCheck("audioTouchPanel")}
          label
        />
        <label htmlFor=''>Touch Panel</label>
        <br />

        <input
          type='checkbox'
          name='audioIphone'
          value={values.audioIphone}
          checked={this.props.audioIphone}
          onChange={handleCheck("audioIphone")}
          label
        />
        <label htmlFor=''>iPhone/iPad</label>
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

export default AudioControls;
