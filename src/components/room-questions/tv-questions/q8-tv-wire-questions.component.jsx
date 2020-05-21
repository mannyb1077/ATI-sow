import React from "react";

import SubmitButton from "../../submit-button/submit-button.component";
import FormInput from "../../form-input/form-input.component";

class WireQuantityQuestions extends React.Component {
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
        <h1>Please tell us what wires we have at TV location from head-end </h1>
        <br />
        <br />

        <input
          type='checkbox'
          name='atiRtv'
          value={values.atiRtv}
          checked={this.props.atiRtv}
          onChange={handleCheck("atiRtv")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>ATI RTV</label>
        <br />
        <input
          type='checkbox'
          name='atiFiberRtv'
          value={values.atiFiberRtv}
          checked={this.props.atiFiberRtv}
          onChange={handleCheck("atiFiberRtv")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>ATI Fiber RTV</label>
        <br />
        <input
          type='checkbox'
          name='atiRtvWithSounbar'
          value={values.atiRtvWithSounbar}
          checked={this.props.atiRtvWithSounbar}
          onChange={handleCheck("atiRtvWithSounbar")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>ATI RTV with Soundbar</label>
        <br />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='wireC5Quantity'
          value={values.wireC5Quantity}
          onChange={handleChange("wireC5Quantity")}
          onKeyPress={this.onKeyPress}
          label='How many Cat5 Wires do we have at TV Location?'
        />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='wireC6Quantity'
          value={values.wireC6Quantity}
          onChange={handleChange("wireC6Quantity")}
          onKeyPress={this.onKeyPress}
          label='How many Cat6 Wires do we have at TV Location?'
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='wireCoaxQuantity'
          value={values.wireCoaxQuantity}
          onChange={handleChange("wireCoaxQuantity")}
          onKeyPress={this.onKeyPress}
          label='How many Coax Wires do we have at TV Location?'
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='wireFiberQuantity'
          value={values.wireFiberQuantity}
          onChange={handleChange("wireFiberQuantity")}
          onKeyPress={this.onKeyPress}
          label='How many Fiber Wires do we have at TV Location?'
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='wireSpeakerQuantity'
          value={values.wireSpeakerQuantity}
          onChange={handleChange("wireSpeakerQuantity")}
          onKeyPress={this.onKeyPress}
          label='How many Speaker Wires do we have at TV Location?'
        />

        <FormInput
          onSubmit={this.continue}
          type='text'
          name='wireOtherQuantity'
          value={values.wireOtherQuantity}
          onChange={handleChange("wireOtherQuantity")}
          onKeyPress={this.onKeyPress}
          label='Is there other type of wires?'
        />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='conduitLocation'
          value={values.conduitLocation}
          onChange={handleChange("conduitLocation")}
          onKeyPress={this.onKeyPress}
          label='Is there any conduit?'
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

export default WireQuantityQuestions;
