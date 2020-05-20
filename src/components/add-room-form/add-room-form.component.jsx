import React from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import uuid from "uuid";

import "./add-room-form.styles.scss";
import { addRoom } from "../../redux/house/house.actions";
import RoomSubmit from "../room-questions/room-submit";

import initialState from "../../redux/house/questions.data";
import resetInitialState from "../../redux/house/reset-questions.data.js";

import ClientNameQuestion from "../room-questions/q1-project-name-form";
import RoomNameQuestion from "../room-questions/q2-room-name-question.component";
import EquipmentQuestions from "../room-questions/q3-room-equipment-questions.component";
import TvQuestions from "../room-questions/tv-questions/q4-tv-questions-component";
import TvDetails from "../room-questions/tv-questions/q5-tv-details.component";
import TvMountDetails from "../room-questions/tv-questions/q6-tv-mount-question.component.jsx";
import TvPocketDetails from "../room-questions/tv-questions/q7-pocket-details.component";
import WireQuantityQuestions from "../room-questions/tv-questions/q8-tv-wire-questions.component";
import TvControlQuestions from "../room-questions/tv-questions/q9-tv-controls.component";
import RoomSourcesQuestions from "../room-questions/tv-questions/q10-room-sources-question.component";
import TvSourcesAudio from "../room-questions/tv-questions/q11-tv-sources-audio.component";
import AudioQuestions from "../room-questions/audio-questions/q12-audio-questions.component";
import AudioControls from "../room-questions/audio-questions/q13-audio-controls-questions";
import PhoneDataQuestion from "../room-questions/phone-data-questions/q14-phone-data-question.component";
import CameraQuestion from "../room-questions/phone-data-questions/q15-camera-question.component";
import ProjectorDetails from "../room-questions/projector-questions/q16-projector-questions.component";
import ScreenDetails from "../room-questions/projector-questions/q17-screen-questions.component.jsx";
import RoomNotesQuestion from "../room-questions/q18-room-notes.component";

class AddNewRoomToCart extends React.Component {
  state = initialState;

  handleChange = (input) => (event) => {
    event.preventDefault();
    this.setState({ [input]: event.target.value });

    //const roomName = { ...this.state.roomName };
  };

  handleCheck = (checked) => (event) => {
    this.setState({ [checked]: event.target.checked });
  };

  handleSubmit = (event) => {
    console.log("handle Submit");

    const room = this.state;
    this.props.dispatch(addRoom(room));

    this.setState(resetInitialState);
  };

  handleFinalSubmit = (event) => {
    event.preventDefault();
    const rooms = this.state.roomInfo.roomName;

    // if (rooms !== "") {
    //   this.props.history.push("/home/equipment");
    // }

    const room = {
      id: uuid(),
      roomName: rooms,
      title: rooms,
      equipment: [],
      roomNotes: "Notes related to room will go here",
    };
    console.log(room);
    //this.props.dispatch(addRoom(room));
    this.nextQuestion();
    //this.setState({ roomName: "" });
  };

  handleSubmitStayInPage = (event) => {
    event.preventDefault();
    console.log("roomName goes here");
    const rooms = this.state.roomName;

    const room = {
      id: uuid(),
      roomName: rooms,
      title: rooms,
      equipment: [],
      roomNotes: "Notes related to room will go here",
    };
    this.props.dispatch(addRoom(room));

    this.setState({ roomName: "" });
  };

  nextQuestion = () => {
    const {
      question,
      tvZone,
      audioZone,
      dataZone,
      cameraZone,
      projectorZone,
      clientName,
      tvPocket,
    } = this.state;

    this.setState({
      question: question + 1,
    });

    //Changing variables (false) to strings
    // if (question === 3 && tvZone === false) {
    //   this.setState({
    //     tvZone: "No TV",
    //   });
    // }
    // if (question === 3 && audioZone === false) {
    //   this.setState({
    //     audioZone: "No Speakers",
    //   });
    // }
    // if (question === 3 && dataZone === false) {
    //   this.setState({
    //     dataZone: "No Phone/Data",
    //   });
    // }
    // if (question === 3 && cameraZone === false) {
    //   this.setState({
    //     cameraZone: "No Cameras",
    //   });
    // }

    // if (question === 3 && projectorZone === false) {
    //   this.setState({
    //     projectorZone: "No Projector",
    //   });
    // }

    //Jumping to specific questions page
    if (question === 1 && clientName !== "") {
      this.setState({
        question: 2,
      });
    }

    if (question === 2) {
      this.setState({
        id: uuid(),
      });
    }

    if (
      question === 3 &&
      tvZone === false &&
      audioZone === true &&
      (dataZone === false || true) &&
      (cameraZone === false || true) &&
      (projectorZone === false || true)
    ) {
      this.setState({
        question: 12,
      });
    }

    if (
      question === 3 &&
      tvZone === false &&
      audioZone === false &&
      dataZone === true &&
      (cameraZone === false || true) &&
      (projectorZone === false || true)
    ) {
      this.setState({
        question: 14,
      });
    }

    if (
      question === 3 &&
      tvZone === false &&
      audioZone === false &&
      dataZone === false &&
      cameraZone === true &&
      (projectorZone === false || true)
    ) {
      this.setState({
        question: 15,
      });
    }

    if (
      question === 3 &&
      tvZone === false &&
      audioZone === false &&
      dataZone === false &&
      cameraZone === false &&
      projectorZone === true
    ) {
      this.setState({
        question: 16,
      });
    }

    if (
      question === 3 &&
      tvZone === false &&
      audioZone === false &&
      dataZone === false &&
      cameraZone === false &&
      projectorZone === false
    ) {
      this.setState({
        question: 18,
      });
    } //End of TV Questions

    if (question === 6 && tvPocket === false) {
      this.setState({
        question: 8,
      });
    }

    if (
      question === 11 &&
      (tvZone === false || true) &&
      audioZone === true &&
      (dataZone === false || true) &&
      (cameraZone === false || true) &&
      (projectorZone === false || true)
    ) {
      this.setState({
        question: 12,
      });
    }

    if (
      question === 11 &&
      (tvZone === false || true) &&
      audioZone === false &&
      dataZone === true &&
      (cameraZone === false || true) &&
      (projectorZone === false || true)
    ) {
      this.setState({
        question: 14,
      });
    }

    if (
      question === 11 &&
      (tvZone === false || true) &&
      audioZone === false &&
      dataZone === false &&
      cameraZone === true &&
      (projectorZone === false || true)
    ) {
      this.setState({
        question: 15,
      });
    }
    if (
      question === 11 &&
      (tvZone === false || true) &&
      audioZone === false &&
      dataZone === false &&
      cameraZone === false &&
      projectorZone === true
    ) {
      this.setState({
        question: 16,
      });
    }
    if (
      question === 11 &&
      (tvZone === false || true) &&
      audioZone === false &&
      dataZone === false &&
      cameraZone === false &&
      projectorZone === false
    ) {
      this.setState({
        question: 18,
      });
    } //End Audio Questions (13)

    if (
      question === 13 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      dataZone === true &&
      (cameraZone === false || true) &&
      (projectorZone === false || true)
    ) {
      this.setState({
        question: 14,
      });
    }
    if (
      question === 13 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      dataZone === false &&
      cameraZone === true &&
      (projectorZone === false || true)
    ) {
      this.setState({
        question: 15,
      });
    }
    if (
      question === 13 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      dataZone === false &&
      cameraZone === false &&
      projectorZone === true
    ) {
      this.setState({
        question: 16,
      });
    }
    if (
      question === 13 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      dataZone === false &&
      cameraZone === false &&
      projectorZone === false
    ) {
      this.setState({
        question: 18,
      });
    } // End data questions

    if (
      question === 14 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      (dataZone === false || true) &&
      cameraZone === true &&
      (projectorZone === false || true)
    ) {
      this.setState({
        question: 15,
      });
    }
    if (
      question === 14 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      (dataZone === false || true) &&
      cameraZone === false &&
      projectorZone === true
    ) {
      this.setState({
        question: 16,
      });
    }
    if (
      question === 14 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      (dataZone === false || true) &&
      cameraZone === false &&
      projectorZone === false
    ) {
      this.setState({
        question: 18,
      });
    } //End of Data Questions

    if (
      question === 15 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      (dataZone === false || true) &&
      (cameraZone === false || true) &&
      projectorZone === true
    ) {
      this.setState({
        question: 16,
      });
    }
    if (
      question === 15 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      (dataZone === false || true) &&
      (cameraZone === false || true) &&
      projectorZone === false
    ) {
      this.setState({
        question: 18,
      });
    } // End Camera Questions

    if (question === 18) {
      this.setState({
        question: 2,
      });
    }
  }; //End Room Notes

  previousQuestion = () => {
    const {
      question,
      tvZone,
      audioZone,
      dataZone,
      cameraZone,
      projectorZone,
      tvPocket,
    } = this.state;
    this.setState({
      question: question - 1,
    });
    if (
      question === 18 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      (dataZone === false || true) &&
      (cameraZone === false || true) &&
      projectorZone === true
    ) {
      this.setState({
        question: 17,
      });
    }
    if (
      question === 18 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      (dataZone === false || true) &&
      cameraZone === true &&
      projectorZone === false
    ) {
      this.setState({
        question: 15,
      });
    }
    if (
      question === 18 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      dataZone === true &&
      cameraZone === false &&
      projectorZone === false
    ) {
      this.setState({
        question: 14,
      });
    }
    if (
      question === 18 &&
      (tvZone === false || true) &&
      audioZone === true &&
      dataZone === false &&
      cameraZone === false &&
      projectorZone === false
    ) {
      this.setState({
        question: 13,
      });
    }
    if (
      question === 18 &&
      tvZone === true &&
      audioZone === false &&
      dataZone === false &&
      cameraZone === false &&
      projectorZone === false
    ) {
      this.setState({
        question: 11,
      });
    }
    if (
      question === 18 &&
      tvZone === false &&
      audioZone === false &&
      dataZone === false &&
      cameraZone === false &&
      projectorZone === false
    ) {
      this.setState({
        question: 3,
      });
    } // End of Notes Page

    if (
      question === 16 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      (dataZone === false || true) &&
      cameraZone === true
    ) {
      this.setState({
        question: 15,
      });
    }
    if (
      question === 16 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      dataZone === true &&
      cameraZone === false
    ) {
      this.setState({
        question: 14,
      });
    }
    if (
      question === 16 &&
      (tvZone === false || true) &&
      audioZone === true &&
      dataZone === false &&
      cameraZone === false
    ) {
      this.setState({
        question: 13,
      });
    }
    if (
      question === 16 &&
      tvZone === true &&
      audioZone === false &&
      dataZone === false &&
      cameraZone === false
    ) {
      this.setState({
        question: 11,
      });
    }
    if (
      question === 16 &&
      tvZone === false &&
      audioZone === false &&
      dataZone === false &&
      cameraZone === false
    ) {
      this.setState({
        question: 3,
      });
    } // End of Projector Question

    if (
      question === 15 &&
      (tvZone === false || true) &&
      (audioZone === false || true) &&
      dataZone === true
    ) {
      this.setState({
        question: 14,
      });
    }
    if (
      question === 15 &&
      (tvZone === false || true) &&
      audioZone === true &&
      dataZone === false
    ) {
      this.setState({
        question: 13,
      });
    }
    if (
      question === 15 &&
      tvZone === true &&
      audioZone === false &&
      dataZone === false
    ) {
      this.setState({
        question: 11,
      });
    }
    if (
      question === 15 &&
      tvZone === false &&
      audioZone === false &&
      dataZone === false
    ) {
      this.setState({
        question: 3,
      });
    } // End of camera question

    if (question === 14 && (tvZone === false || true) && audioZone === true) {
      this.setState({
        question: 13,
      });
    }
    if (question === 14 && tvZone === true && audioZone === false) {
      this.setState({
        question: 11,
      });
    }
    if (question === 14 && tvZone === false && audioZone === false) {
      this.setState({
        question: 3,
      });
    } // End of data question

    if (question === 12 && tvZone === true) {
      this.setState({
        question: 11,
      });
    }
    if (question === 12 && tvZone === false) {
      this.setState({
        question: 3,
      }); // End of Audio Question
    }
    if (question === 8 && tvPocket === false) {
      this.setState({
        question: 6,
      });
    }
  };

  displayQuestion = () => {
    const { question } = this.state;
    const {
      clientName,
      roomName,
      tvZone,
      dataZone,
      roomNotes,
      newTV,
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
      cameraBullet,
      cameraDome,
      cameraPTZ,
      cameraAnalog,
      cameraIP,
      cameraNest,
      cameraRing,
      cameraNestDoorbell,
      cameraRingDoorbell,
      otherCloudCamera,
      cameraWire,
      cameraPower,
      projectorBrand,
      projectorModel,
      projectorIr,
      projectorRs232,
      projectorIP,
      projectorDrop,
      projectorZone,
      projectorNotes,
      screenNew,
      screenCustomerProvided,
      screenPerforated,
      screenLightRejection,
      screenFixed,
      screenMotorized,
      screenGain,
      screenSize,
      screenWidth,
      screenHeight,
      throwDistance,
      tvSourcesTvAudio,
      tvSourcesOverheadAudio,
      dedicatedSourcesInRack,
      pocketMountOnly,
      pocketTvInside,
      backBox,
      pocketWidth,
      pocketHeight,
      pocketDepth,
      atiRtv,
      atiFiberRtv,
      atiRtvWithSounbar,
      tvSourcesLocalSoundbar,
      soundbar,
      dosSpeakers,
      dosSub,
    } = this.state;

    const values = {
      clientName,
      roomName,
      tvZone,
      newTV,
      dataZone,
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
      cameraBullet,
      cameraDome,
      cameraPTZ,
      cameraAnalog,
      cameraIP,
      cameraNest,
      cameraRing,
      cameraNestDoorbell,
      cameraRingDoorbell,
      otherCloudCamera,
      cameraWire,
      cameraPower,
      projectorBrand,
      projectorModel,
      projectorIr,
      projectorRs232,
      projectorIP,
      projectorDrop,
      projectorZone,
      projectorNotes,
      screenNew,
      screenCustomerProvided,
      screenPerforated,
      screenLightRejection,
      screenFixed,
      screenMotorized,
      screenGain,
      screenSize,
      screenWidth,
      screenHeight,
      throwDistance,
      tvSourcesTvAudio,
      tvSourcesOverheadAudio,
      dedicatedSourcesInRack,
      pocketMountOnly,
      pocketTvInside,
      backBox,
      pocketWidth,
      pocketHeight,
      pocketDepth,
      atiRtv,
      atiFiberRtv,
      atiRtvWithSounbar,
      tvSourcesLocalSoundbar,
      soundbar,
      dosSpeakers,
      dosSub,
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
            tvZone={this.state.tvZone}
            projectorZone={this.state.projectorZone}
            audioZone={this.state.audioZone}
            dataZone={this.state.dataZone}
            cameraZone={this.state.cameraZone}
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
            customerProvidedTV={this.state.customerProvidedTV}
            newTV={this.state.newTV}
            customerProvidedTvMount={this.state.customerProvidedTvMount}
            newTvMount={this.state.newTvMount}
            mountTvStand={this.state.mountTvStand}
            mountTvLift={this.state.mountTvLift}
            mountOther={this.state.mountOther[this.state.mountOther]}
            backBox={this.state.backBox}
            tvPocket={this.state.tvPocket}
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
            tvBrand={this.state.tvBrand[this.state.tvBrand]}
            tvModel={this.state.tvModel[this.state.tvModel]}
            tvSize={this.state.tvSize[this.state.tvSize]}
            pocketSize={this.state.pocketSize[this.state.pocketSize]}
            values={values}
          />
        );
      case 6:
        return (
          <TvMountDetails
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            mountFlat={this.state.mountFlat}
            mountTilt={this.state.mountTilt}
            mountArticulating={this.state.mountArticulating}
            values={values}
          />
        );
      case 7:
        return (
          <TvPocketDetails
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            pocketMountOnly={this.state.pocketMountOnly}
            pocketTvInside={this.state.pocketTvInside}
            pocketWidth={this.state.pocketWidth[this.state.pocketWidth]}
            pocketHeight={this.state.pocketHeight[this.state.pocketHeight]}
            pocketDepth={this.state.pocketDepth[this.state.pocketDepth]}
            values={values}
          />
        );

      case 8:
        return (
          <WireQuantityQuestions
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            atiRtv={this.state.atiRtv}
            atiFiberRtv={this.state.atiFiberRtv}
            atiRtvWithSounbar={this.state.atiRtvWithSounbar}
            wireC5Quantity={
              this.state.wireC5Quantity[this.state.wireC5Quantity]
            }
            wireC6Quantity={
              this.state.wireC6Quantity[this.state.wireC6Quantity]
            }
            wireCoaxQuantity={
              this.state.wireCoaxQuantity[this.state.wireCoaxQuantity]
            }
            wireFiberQuantity={
              this.state.wireFiberQuantity[this.state.wireFiberQuantity]
            }
            wireSpeakerQuantity={
              this.state.wireSpeakerQuantity[this.state.wireSpeakerQuantity]
            }
            wireOtherQuantity={
              this.state.wireOtherQuantity[this.state.wireOtherQuantity]
            }
            conduitLocation={
              this.state.conduitLocation[this.state.conduitLocation]
            }
            values={values}
          />
        );
      case 9:
        return (
          <TvControlQuestions
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            controlSystem={this.state.controlSystem}
            iPad={this.state.iPad}
            keypad={this.state.keypad}
            factoryRemotes={this.state.factoryRemotes}
            otherTvControls={
              this.state.otherTvControls[this.stateotherTvControls]
            }
            values={values}
          />
        );
      case 10:
        return (
          <RoomSourcesQuestions
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            distributedSources={this.state.distributedSources}
            localSources={this.state.localSources}
            dedicatedSourcesInRack={this.state.dedicatedSourcesInRack}
            otherSources={this.state.otherSources[this.state.otherSources]}
            values={values}
          />
        );
      case 11:
        return (
          <TvSourcesAudio
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            tvSourcesTvAudio={this.state.tvSourcesTvAudio}
            tvSourcesOverheadAudio={this.state.tvSourcesOverheadAudio}
            tvSourcesLocalSoundbar={this.state.tvSourcesLocalSoundbar}
            values={values}
          />
        );
      case 12:
        return (
          <AudioQuestions
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            existingSpeakers={this.state.existingSpeakers}
            newSpeakers={this.state.newSpeakers}
            inCeilingSpeakers={this.state.inCeilingSpeakers}
            inWallSpeakers={this.state.inWallSpeakers}
            bookShelfSpeakers={this.state.bookShelfSpeakers}
            towerSpeakers={this.state.towerSpeakers}
            surroundSpeakers={this.state.surroundSpeakers}
            soundbar={this.state.soundbar}
            dosSpeakers={this.state.dosSpeakers}
            subInWall={this.state.subInWall}
            subPowered={this.state.subPowered}
            dosSub={this.state.dosSub}
            values={values}
          />
        );
      case 13:
        return (
          <AudioControls
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            distributedAudio={this.state.distributedAudio}
            dedicatedAudioSource={this.state.dedicatedAudioSource}
            audioSourceOther={this.state.audioSourceOther}
            audioKeypad={this.state.audioKeypad}
            audioTouchPanel={this.state.audioTouchPanel}
            audioIphone={this.state.audioIphone}
            values={values}
          />
        );
      case 14:
        return (
          <PhoneDataQuestion
            handleCheck={this.handleCheck}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            phoneLocation={this.state.phoneLocation}
            dataLocation={this.state.dataLocation}
            apLocation={this.state.apLocation}
            apPowerLocation={this.state.apPowerLocation}
            values={values}
          />
        );
      case 15:
        return (
          <CameraQuestion
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            cameraBullet={this.state.cameraBullet}
            cameraDome={this.state.cameraDome}
            cameraPTZ={this.state.cameraPTZ}
            cameraAnalog={this.state.cameraAnalog}
            cameraIP={this.state.cameraIP}
            cameraNest={this.state.cameraNest}
            cameraRing={this.state.cameraRing}
            cameraNestDoorbell={this.state.cameraNestDoorbell}
            cameraRingDoorbell={this.state.cameraRingDoorbell}
            otherCloudCamera={this.state.otherCloudCamera}
            cameraWire={this.state.cameraWire[this.state.cameraWire]}
            cameraPower={this.state.cameraPower}
            values={values}
          />
        );
      case 16:
        return (
          <ProjectorDetails
            handleCheck={this.handleCheck}
            handleChange={this.handleChange}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            projectorNew={this.state.projectorNew}
            projectorCustomerProvided={this.state.projectorCustomerProvided}
            projectorMountNew={this.state.projectorMountNew}
            projectorMountCP={this.state.projectorMountCP}
            projectorBrand={
              this.state.projectorBrand[this.state.projectorBrand]
            }
            projectorModel={
              this.state.projectorModel[this.state.projectorModel]
            }
            projectorIr={this.state.projectorIr}
            projectorRs232={this.state.projectorRs232}
            projectorIP={this.state.projectorIP}
            projectorDrop={this.state.projectorDrop[this.state.projectorDrop]}
            projectorNotes={
              this.state.projectorNotes[this.state.projectorNotes]
            }
            values={values}
          />
        );
      case 17:
        return (
          <ScreenDetails
            handleChange={this.handleChange}
            handleCheck={this.handleCheck}
            handleSubmit={this.handleSubmit}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            screenNew={this.state.screenNew}
            screenCustomerProvided={this.state.screenCustomerProvided}
            screenPerforated={this.state.screenPerforated}
            screenLightRejection={this.state.screenLightRejection}
            screenFixed={this.state.screenFixed}
            screenMotorized={this.state.screenMotorized}
            screenGain={this.state.screenGain[this.state.screenGain]}
            screenSize={this.state.screenSize[this.state.screenSize]}
            screenWidth={this.state.screenWidth[this.state.screenWidth]}
            screenHeight={this.state.screenHeight[this.state.screenHeight]}
            throwDistance={this.state.throwDistance[this.state.throwDistance]}
            values={values}
          />
        );
      case 18:
        return (
          <RoomNotesQuestion
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            roomNotes={this.state.roomNotes[this.state.roomNotes]}
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
    // const {
    //   clientName,
    //   roomName,
    //   roomNotes,
    //   tvZone,
    //   audioZone,
    //   projectorZone,
    //   cameraZone,
    //   phone_Data,
    //   customerProvidedTV,
    //   newTV,
    //   tvPocket,
    //   customerProvidedTvMount,
    //   newTvMount,
    //   tvLift,
    //   tvStand,
    //   tvBrand,
    //   tvModel,
    //   tvSize,
    //   pocketSize,
    //   mountOther,
    //   tvSourcesTvAudio,
    //   tvSourcesOverheadAudio,
    //   dedicatedAudioSource,
    // } = this.state;

    // const values = {
    //   clientName,
    //   roomName,
    //   roomNotes,
    //   tvZone,
    //   audioZone,
    //   projectorZone,
    //   cameraZone,
    //   phone_Data,
    //   customerProvidedTV,
    //   newTV,
    //   tvPocket,
    //   customerProvidedTvMount,
    //   newTvMount,
    //   tvLift,
    //   tvStand,
    //   tvBrand,
    //   tvModel,
    //   tvSize,
    //   pocketSize,
    //   mountOther,
    //   tvSourcesTvAudio,
    //   tvSourcesOverheadAudio,
    //   dedicatedAudioSource,
    // };

    return (
      <div className='questions'>
        {this.displayQuestion()}
        <h1>question {question}</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRoom: (room) => dispatch(addRoom(room)),
});

export default withRouter(connect(mapDispatchToProps)(AddNewRoomToCart));
