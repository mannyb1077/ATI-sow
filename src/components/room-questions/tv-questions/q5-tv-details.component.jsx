import React from "react";
import FormInput from "../../form-input/form-input.component";
import SubmitButton from "../../submit-button/submit-button.component";

class TvDetails extends React.Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextQuestion();
  };
  previous = (event) => {
    event.preventDefault();
    this.props.previousQuestion();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className='add-room'>
        <h1>Please provide as much information as possible</h1>
        <span></span>

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='tvBrand'
          value={values.tvBrand}
          onChange={handleChange("tvBrand")}
          label='TV Brand'
          required
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='tvModel'
          value={values.tvModel}
          onChange={handleChange("tvModel")}
          label='TV Model'
          required
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='tvSize'
          value={values.tvSize}
          onChange={handleChange("tvSize")}
          label='TV Size'
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

export default TvDetails;
