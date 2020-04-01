import React from "react";
import FormInput from "../../form-input/form-input.component";
import SubmitButton from "../../submit-button/submit-button.component";

class CameraQuestion extends React.Component {
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
        <h1>Does this room have a camera location?</h1>
        <span></span>
        <br />
        <br />
        <h2>Camera Type:</h2>
        <input
          type='checkbox'
          name='cameraBullet'
          value={values.cameraBullet}
          checked={this.props.cameraBullet}
          onChange={handleCheck("cameraBullet")}
          label
        />
        <label htmlFor=''>Bullet Camera</label>
        <br />
        <input
          type='checkbox'
          name='cameraDome'
          value={values.cameraDome}
          checked={this.props.cameraDome}
          onChange={handleCheck("cameraDome")}
          label
        />
        <label htmlFor=''>Dome Camera</label>
        <br />
        <input
          type='checkbox'
          name='cameraPTZ'
          value={values.cameraPTZ}
          checked={this.props.cameraPTZ}
          onChange={handleCheck("cameraPTZ")}
          label
        />
        <label htmlFor=''>PTZ Camera</label>
        <br />
        <h2>IP/Analog Camera:</h2>
        <input
          type='checkbox'
          name='cameraAnalog'
          value={values.cameraAnalog}
          onChange={handleChange("cameraAnalog")}
          require
        />
        <label htmlFor=''>Analog Camera</label>
        <br />
        <input
          type='checkbox'
          name='cameraIP'
          value={values.cameraIP}
          onChange={handleChange("cameraIP")}
          require
        />
        <label htmlFor=''>IP Camera</label>
        <br />
        <h2>Cloud Camera:</h2>
        <input
          type='checkbox'
          name='cameraNest'
          value={values.cameraNest}
          onChange={handleChange("cameraNest")}
          require
        />
        <label htmlFor=''>Nest Camera</label>
        <br />
        <input
          type='checkbox'
          name='cameraRing'
          value={values.cameraRing}
          onChange={handleChange("cameraRing")}
          require
        />
        <label htmlFor=''>Ring Camera</label>
        <br />
        <input
          type='checkbox'
          name='cameraNestDoorbell'
          value={values.cameraNestDoorbell}
          onChange={handleChange("cameraNestDoorbell")}
          require
        />
        <label htmlFor=''>Nest Doorbell</label>
        <br />
        <input
          type='checkbox'
          name='cameraRingDoorbell'
          value={values.cameraRingDoorbell}
          onChange={handleChange("cameraRingDoorbell")}
          require
        />
        <label htmlFor=''>Ring Doorbell</label>
        <br />
        <br />
        <input
          type='checkbox'
          name='cameraPower'
          value={values.cameraPower}
          onChange={handleChange("cameraPower")}
          require
        />
        <label htmlFor=''>Power at camera location</label>
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='otherCloudCamera'
          value={values.otherCloudCamera}
          onChange={handleChange("otherCloudCamera")}
          label='Other Camera Type'
        />
        <FormInput
          onSubmit={this.continue}
          type='text'
          name='cameraWire'
          value={values.cameraWire}
          onChange={handleChange("cameraWire")}
          label='What wire do we have at Camera location'
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

export default CameraQuestion;
