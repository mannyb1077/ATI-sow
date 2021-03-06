import React from "react";
import FormInput from "../../form-input/form-input.component";
import SubmitButton from "../../submit-button/submit-button.component";

class TvQuestions extends React.Component {
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
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>New TV</label>
        <br />
        <input
          type='checkbox'
          name='customerProvidedTV'
          value={values.customerProvidedTV}
          checked={this.props.customerProvidedTV}
          onChange={handleCheck("customerProvidedTV")}
          onKeyPress={this.onKeyPress}
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
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>New TV Mount</label>
        <br />
        <input
          type='checkbox'
          name='customerProvidedTvMount'
          value={values.customerProvidedTvMount}
          checked={this.props.customerProvidedTvMount}
          onChange={handleCheck("customerProvidedTvMount")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>Customer Provided TV Mount</label>
        <br />
        <input
          type='checkbox'
          name='mountTvStand'
          value={values.mountTvStand}
          checked={this.props.mountTvStand}
          onChange={handleCheck("mountTvStand")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>TV Stand</label>
        <br />
        <input
          type='checkbox'
          name='mountTvLift'
          value={values.mountTvLift}
          checked={this.props.mountTvLift}
          onChange={handleCheck("mountTvLift")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>TV Lift</label>
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='mountOther'
          value={values.mountOther}
          onChange={handleChange("mountOther")}
          onKeyPress={this.onKeyPress}
          label='Other Mount Type'
        />

        <br />
        <h2>Back Box:</h2>
        <input
          type='checkbox'
          name='backBox'
          value={values.backBox}
          checked={this.props.backBox}
          onChange={handleCheck("backBox")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>Small Back Box</label>

        <br />

        <h2>Pocket:</h2>
        <input
          type='checkbox'
          name='tvPocket'
          value={values.tvPocket}
          checked={this.props.tvPocket}
          onChange={handleCheck("tvPocket")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>Pocket</label>
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

export default TvQuestions;
