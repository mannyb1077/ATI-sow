import React from "react";
import FormInput from "../../form-input/form-input.component";
import SubmitButton from "../../submit-button/submit-button.component";

class TvPocketDetails extends React.Component {
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
    const { values, handleChange, handleCheck } = this.props;
    return (
      <div className='add-room'>
        <h1>Please provide as much information as possible</h1>
        <span></span>

        <input
          type='checkbox'
          name='pocketMountOnly'
          value={values.pocketMountOnly}
          checked={this.props.pocketMountOnly}
          onChange={handleCheck("pocketMountOnly")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>TV Mount in Pocket</label>
        <br />
        <input
          type='checkbox'
          name='pocketTvInside'
          value={values.pocketTvInside}
          checked={this.props.pocketTvInside}
          onChange={handleCheck("pocketTvInside")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>TV & Mount in Pocket</label>
        <br />
        <br />
        <h2>Pocket Dimensions:</h2>
        <br />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='pocketWidth'
          value={values.pocketWidth}
          onChange={handleChange("pocketWidth")}
          onKeyPress={this.onKeyPress}
          label='Pocket Width'
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='pocketHeight'
          value={values.pocketHeight}
          onChange={handleChange("pocketHeight")}
          onKeyPress={this.onKeyPress}
          label='pocketHeight'
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='pocketDepth'
          value={values.pocketDepth}
          onChange={handleChange("pocketDepth")}
          onKeyPress={this.onKeyPress}
          label='pocketDepth'
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

export default TvPocketDetails;
