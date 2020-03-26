import React from "react";

import SubmitButton from "../../submit-button/submit-button.component";

class TvSourcesAudio extends React.Component {
  continue = event => {
    event.preventDefault();
    this.props.nextQuestion();
  };
  previous = event => {
    event.preventDefault();
    this.props.previousQuestion();
  };
  render() {
    const { values, handleCheck } = this.props;
    return (
      <div className='add-room'>
        <h1>What audio are TV Sources using? </h1>
        <br />
        <br />
        <input
          type='checkbox'
          name='tvSourcesTvAudio'
          value={values.tvSourcesTvAudio}
          checked={this.props.tvSourcesTvAudio}
          onChange={handleCheck("tvSourcesTvAudio")}
          label
        />
        <label htmlFor=''>TV Audio</label>
        <input
          type='checkbox'
          name='tvSourcesOverheadAudio'
          value={values.tvSourcesOverheadAudio}
          checked={this.props.tvSourcesOverheadAudio}
          onChange={handleCheck("tvSourcesOverheadAudio")}
          label
        />
        <label htmlFor=''>Overhead Audio</label>
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

export default TvSourcesAudio;
