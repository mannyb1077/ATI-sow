import React from "react";
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
    const { values, handleCheck } = this.props;
    return (
      <div className='add-room'>
        <h1>Please select all that Apply</h1>
        <span></span>
        <br />
        <br />
        <h2>Speakers:</h2>
        <input
          type='checkbox'
          name='newSpeakers'
          value={values.newSpeakers}
          checked={this.props.newSpeakers}
          onChange={handleCheck("newSpeakers")}
          label
        />
        <label htmlFor=''>New Speakers</label>
        <br />
        <input
          type='checkbox'
          name='existingSpeakers'
          value={values.existingSpeakers}
          checked={this.props.existingSpeakers}
          onChange={handleCheck("existingSpeakers")}
          label
        />
        <label htmlFor=''>Existing Speakers</label>
        <br />

        <h2>Speakers:</h2>
        <input
          type='checkbox'
          name='inCeilingSpeakers'
          value={values.inCeilingSpeakers}
          checked={this.props.inCeilingSpeakers}
          onChange={handleCheck("inCeilingSpeakers")}
          label
        />
        <label htmlFor=''>In-Ceiling Speakers</label>
        <br />

        <input
          type='checkbox'
          name='inWallSpeakers'
          value={values.inWallSpeakers}
          checked={this.props.inWallSpeakers}
          onChange={handleCheck("inWallSpeakers")}
          label
        />
        <label htmlFor=''>In-Wall Speakers</label>
        <br />

        <input
          type='checkbox'
          name='bookShelfSpeakers'
          value={values.bookShelfSpeakers}
          checked={this.props.bookShelfSpeakers}
          onChange={handleCheck("bookShelfSpeakers")}
          label
        />
        <label htmlFor=''>Bookshelf Speakers</label>
        <br />
        <input
          type='checkbox'
          name='towerSpeakers'
          value={values.towerSpeakers}
          checked={this.props.towerSpeakers}
          onChange={handleCheck("towerSpeakers")}
          label
        />
        <label htmlFor=''>Tower Speakers</label>
        <br />
        <input
          type='checkbox'
          name='surroundSpeakers'
          value={values.surroundSpeakers}
          checked={this.props.surroundSpeakers}
          onChange={handleCheck("surroundSpeakers")}
          label
        />
        <label htmlFor=''>Surround Speakers</label>
        <br />
        <h2>Subwoofer</h2>
        <input
          type='checkbox'
          name='subInWall'
          value={values.subInWall}
          checked={this.props.subInWall}
          onChange={handleCheck("subInWall")}
          label
        />
        <label htmlFor=''>In-Wall Subwoofer</label>
        <br />
        <input
          type='checkbox'
          name='subPowered'
          value={values.subPowered}
          checked={this.props.subPowered}
          onChange={handleCheck("subPowered")}
          label
        />
        <label htmlFor=''>Powered Subwoofer</label>
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
