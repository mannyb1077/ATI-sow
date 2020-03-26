import React from "react";

import SubmitButton from "../submit-button/submit-button.component";

class EquipmentQuestions extends React.Component {
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
        <h1>Please selec all that Apply?</h1>
        <span></span>
        <br />
        <br />
        <input
          type='checkbox'
          name='tvZone'
          value={values.tvZone}
          checked={this.props.tvZone}
          onChange={handleCheck("tvZone")}
          label
        />
        <label htmlFor=''>Does this room have a TV?</label>
        <br />
        <br />
        <input
          type='checkbox'
          name='projectorZone'
          value={values.projectorZone}
          checked={this.props.projectorZone}
          onChange={handleCheck("projectorZone")}
          label
        />
        <label htmlFor=''>Does this room have a Projector?</label>
        <br />
        <br />
        <input
          type='checkbox'
          name='audioZone'
          value={values.audioZone}
          checked={this.props.audioZone}
          onChange={handleCheck("audioZone")}
          label
        />
        <label htmlFor=''>Does this room have Speakers?</label>
        <br />
        <br />
        <input
          type='checkbox'
          name='phone_Data'
          value={values.phone_Data}
          checked={this.props.phone_Data}
          onChange={handleCheck("phone_Data")}
          label
        />
        <label htmlFor=''>Does this room have a Phone/Data Location?</label>
        <br />
        <br />
        <input
          type='checkbox'
          name='cameraZone'
          value={values.cameraZone}
          checked={this.props.cameraZone}
          onChange={handleCheck("cameraZone")}
          label
        />
        <label htmlFor=''>Does this room have a Camera Location?</label>
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

export default EquipmentQuestions;
