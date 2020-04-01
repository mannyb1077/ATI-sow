import React from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import uuid from "uuid";
//import PropTypes from "prop-types";
import "./add-room-form.styles.scss";
import { addRoom } from "../../redux/house/house.actions";
import RoomSubmit from "../room-questions/room-submit";

import initialState from "../../redux/house/questions.data";
import ClientNameQuestion from "../room-questions/project-name-form";
import RoomNameQuestion from "../room-questions/room-name-question.component";
import EquipmentQuestions from "../room-questions/room-equipment-questions.component";
import RoomNotesQuestion from "../room-questions/room-notes.component";
import TvQuestions from "../room-questions/tv-questions/tv-questions-component";
import TvDetails from "../room-questions/tv-questions/tv-details.component";
import WireQuantityQuestions from "../room-questions/tv-questions/tv-wire-questions.component";
import TvControlQuestions from "../room-questions/tv-questions/tv-controls.component";
import RoomSourcesQuestions from "../room-questions/tv-questions/room-sources-question.component";
import TvSourcesAudio from "../room-questions/tv-questions/tv-sources-audio.component";
import AudioQuestions from "../room-questions/audio-questions/audio-questions.component";
import AudioControls from "../room-questions/audio-questions/audio-controls-questions";
import PhoneDataQuestion from "../room-questions/phone-data-questions/phone-data-question.component";
import CameraQuestion from "../room-questions/phone-data-questions/camera-question.component";

class AddNewRoomToCart extends React.Component {
  state = initialState;

  handleChange = input => event => {
    event.preventDefault();
    this.setState({ [input]: event.target.value });

    console.log(this.state);

    //const roomName = { ...this.state.roomName };
  };
  handleCheck = checked => event => {
    this.setState({ [checked]: event.target.checked });
  };

  handleSubmit = event => {
    console.log("handle Submit");

    const room = this.state;

    this.props.dispatch(addRoom(room));
  };

  handleFinalSubmit = event => {
    event.preventDefault();
    const rooms = this.state.roomName;

    // if (rooms !== "") {
    //   this.props.history.push("/home/equipment");
    // }

    const room = {
      id: uuid(),
      roomName: rooms,
      title: rooms,
      equipment: [],
      roomNotes: "Notes related to room will go here"
    };
    //this.props.dispatch(addRoom(room));
    this.nextQuestion();
    //this.setState({ roomName: "" });
  };

  handleSubmitStayInPage = event => {
    event.preventDefault();
    console.log("roomName goes here");
    const rooms = this.state.roomName;

    const room = {
      id: uuid(),
      roomName: rooms,
      title: rooms,
      equipment: [],
      roomNotes: "Notes related to room will go here"
    };
    this.props.dispatch(addRoom(room));

    this.setState({ roomName: "" });
  };

  nextQuestion = () => {
    const { question, tvZone, audioZone, dataZone } = this.state;
    this.setState({
      question: question + 1
    });
    if (question === 3 && tvZone === false) {
      this.setState({
        question: 10
      });
    }
    if (question === 3 && tvZone === false && audioZone === false) {
      this.setState({
        question: 12
      });
    }
    if (
      question === 3 &&
      tvZone === false &&
      audioZone === false &&
      dataZone === false
    ) {
      this.setState({
        question: 13
      });
    }

    if (question === 9 && audioZone === false) {
      this.setState({
        question: 41
      });
    }
  };
  previousQuestion = () => {
    const { question, tvZone, audioZone, dataZone } = this.state;
    this.setState({
      question: question - 1
    });
    if (question === 10 && tvZone === false) {
      this.setState({
        question: 3
      });
    }
    if (question === 12 && tvZone === false && audioZone === false) {
      this.setState({
        question: 3
      });
    }
    if (
      question === 12 &&
      tvZone === false &&
      audioZone === false &&
      dataZone === false
    ) {
      this.setState({
        question: 3
      });
    }
  };

  displayQuestion = () => {
    const { question } = this.state;
    const {
      clientName,
      roomName,
      tvZone,
      roomNotes,
      tvBrand,
      tvModel,
      tvSize,
      pocketSize,
      mountFlat,
      mountTilt,
      mountArticulating,
      mountTvStand,
      mountTvLift,
      mountOther,
      tvLiftType,
      wireC5Quantity,
      wireC6Quantity,
      wireCoaxQuantity,
      wireFiberQuantity,
      wireSpeakerQuantity,
      wireOtherQuantity,
      conduitLocation,
      controlSystem,
      iPad,
      keypad,
      factoryRemotes,
      otherTvControls,
      distributedSources,
      localSources,
      dedicatedSourcesInRack,
      otherSources,
      existingSpeakers,
      newSpeakers,
      inCeilingSpeakers,
      inWallSpeakers,
      bookShelfSpeakers,
      towerSpeakers,
      surroundSpeakers,
      subInWall,
      subPowered,
      distributedAudio,
      dedicatedAudioSource,
      audioSourceOther,
      audioKeypad,
      audioTouchPanel,
      audioIphone,
      phoneLocation,
      dataLocation,
      apLocation,
      apPowerLocation,
      cameraNest,
      cameraRing,
      cameraNestDoorbell,
      cameraRingDoorbell,
      otherCloudCamera,
      cameraWire,
      cameraPower
    } = this.state;
    const values = {
      clientName,
      roomName,
      tvZone,
      roomNotes,
      tvBrand,
      tvModel,
      tvSize,
      pocketSize,
      mountFlat,
      mountTilt,
      mountArticulating,
      mountTvStand,
      mountTvLift,
      mountOther,
      tvLiftType,
      wireC5Quantity,
      wireC6Quantity,
      wireCoaxQuantity,
      wireFiberQuantity,
      wireSpeakerQuantity,
      wireOtherQuantity,
      conduitLocation,
      controlSystem,
      iPad,
      keypad,
      factoryRemotes,
      otherTvControls,
      distributedSources,
      localSources,
      dedicatedSourcesInRack,
      otherSources,
      existingSpeakers,
      newSpeakers,
      inCeilingSpeakers,
      inWallSpeakers,
      bookShelfSpeakers,
      towerSpeakers,
      surroundSpeakers,
      subInWall,
      subPowered,
      distributedAudio,
      dedicatedAudioSource,
      audioSourceOther,
      audioKeypad,
      audioTouchPanel,
      audioIphone,
      phoneLocation,
      dataLocation,
      apLocation,
      apPowerLocation,
      cameraNest,
      cameraRing,
      cameraNestDoorbell,
      cameraRingDoorbell,
      otherCloudCamera,
      cameraWire,
      cameraPower
    };

    switch (question) {
      case 1:
        return (
          <ClientNameQuestion
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            clientName={this.state.clientName[this.state.clientName]}
            values={values}
          />
        );
      case 2:
        return (
          <RoomNameQuestion
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            roomName={this.state.roomName[this.state.roomName]}
            values={values}
          />
        );
      case 3:
        return (
          <EquipmentQuestions
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            values={values}
          />
        );
      case 4:
        return (
          <TvQuestions
            handleChange={this.handleChange}
            handleCheck={this.handleCheck}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            values={values}
          />
        );
      case 5:
        return (
          <TvDetails
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            values={values}
          />
        );
      case 6:
        return (
          <WireQuantityQuestions
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            values={values}
          />
        );
      case 7:
        return (
          <TvControlQuestions
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            values={values}
          />
        );
      case 8:
        return (
          <RoomSourcesQuestions
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            values={values}
          />
        );
      case 9:
        return (
          <TvSourcesAudio
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            values={values}
          />
        );
      case 10:
        return (
          <AudioQuestions
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            values={values}
          />
        );
      case 11:
        return (
          <AudioControls
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            values={values}
          />
        );
      case 12:
        return (
          <PhoneDataQuestion
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            values={values}
          />
        );
      case 13:
        return (
          <CameraQuestion
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            values={values}
          />
        );
      case 25:
        return (
          <div>
            <RoomSubmit
              previousQuestion={this.previousQuestion}
              values={values}
            />
          </div>
        );
      case 40:
        return (
          <RoomNotesQuestion
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            roomNotes={this.state.roomNotes[this.state.roomNotes]}
            values={values}
          />
        );
      case 41:
        return (
          <div>
            <h1>Something went terribly wrong!!!</h1>
          </div>
        );
      default:
      //do nothing
    }
  };

  render() {
    const { question } = this.state;
    const {
      clientName,
      roomName,
      roomNotes,
      tvZone,
      audioZone,
      projectorZone,
      cameraZone,
      phone_Data,
      customerProvidedTV,
      newTV,
      tvPocket,
      customerProvidedTvMount,
      newTvMount,
      tvLift,
      tvStand,
      tvBrand,
      tvModel,
      tvSize,
      pocketSize,
      mountOther,
      tvSourcesTvAudio,
      tvSourcesOverheadAudio
    } = this.state;
    const values = {
      clientName,
      roomName,
      roomNotes,
      tvZone,
      audioZone,
      projectorZone,
      cameraZone,
      phone_Data,
      customerProvidedTV,
      newTV,
      tvPocket,
      customerProvidedTvMount,
      newTvMount,
      tvLift,
      tvStand,
      tvBrand,
      tvModel,
      tvSize,
      pocketSize,
      mountOther,
      tvSourcesTvAudio,
      tvSourcesOverheadAudio
    };

    return (
      <div className='questions'>
        {this.displayQuestion()}
        <h1>question {question}</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addRoom: room => dispatch(addRoom(room))
});

export default withRouter(connect(mapDispatchToProps)(AddNewRoomToCart));
