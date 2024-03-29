import React from "react";
import FormInput from "../../form-input/form-input.component";
import SubmitButton from "../../submit-button/submit-button.component";

class ProjectorDetails extends React.Component {
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
        <h2>Projector:</h2>
        <input
          type='checkbox'
          name='projectorNew'
          value={values.projectorNew}
          checked={this.props.projectorNew}
          onChange={handleCheck("projectorNew")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>New Projector</label>
        <br />
        <input
          type='checkbox'
          name='projectorCustomerProvided'
          value={values.projectorCustomerProvided}
          checked={this.props.projectorCustomerProvided}
          onChange={handleCheck("projectorCustomerProvided")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>Customer Provided Projector</label>
        <br />

        <h2>Projector Mount:</h2>
        <input
          type='checkbox'
          name='projectorMountNew'
          value={values.projectorMountNew}
          checked={this.props.projectorMountNew}
          onChange={handleCheck("projectorMountNew")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>New Projector Mount</label>
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

        <h2>Projector Details</h2>
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='projectorBrand'
          value={values.projectorBrand}
          onChange={handleChange("projectorBrand")}
          onKeyPress={this.onKeyPress}
          label='Projector Brand'
        />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='projectorModel'
          value={values.projectorModel}
          onChange={handleChange("projectorModel")}
          onKeyPress={this.onKeyPress}
          label='Projector Model'
        />

        <h2>Control</h2>
        <input
          type='checkbox'
          name='projectorIr'
          value={values.projectorIr}
          checked={this.props.projectorIr}
          onChange={handleCheck("projectorIr")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>IR</label>
        <br />
        <input
          type='checkbox'
          name='projectorRs232'
          value={values.projectorRs232}
          checked={this.props.projectorRs232}
          onChange={handleCheck("projectorRs232")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>RS-232</label>
        <br />
        <input
          type='checkbox'
          name='projectorIP'
          value={values.projectorIP}
          checked={this.props.projectorIP}
          onChange={handleCheck("projectorIP")}
          onKeyPress={this.onKeyPress}
        />
        <label htmlFor=''>IP</label>
        <br />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='projectorDrop'
          value={values.projectorDrop}
          onChange={handleChange("projectorDrop")}
          onKeyPress={this.onKeyPress}
          label='Projector Drop in inches'
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

export default ProjectorDetails;
