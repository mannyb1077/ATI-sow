const initialState = {
  question: 1,

  //questions 1-9
  clientName: "",
  roomName: "",
  //question 3
  tvZone: false,
  projectorZone: false,
  audioZone: false,
  phone_Data: false,
  cameraZone: false,
  //question 4 (TV Questions)
  customerProvidedTV: false,
  newTV: false,
  tvPocket: false,
  customerProvidedTvMount: false,
  newTvMount: false,

  //questions 5 (TV Specs)
  tvBrand: "",
  tvModel: "",
  tvSize: "",
  pocketSize: "",

  // Mount Type
  mountFlat: false,
  mountTilt: false,
  mountArticulating: false,
  mountTvStand: false,
  mountTvLift: false,
  mountOther: "",
  tvLiftType: "",

  //question 6 (Wire Type)
  wireC5Quantity: "",
  wireC6Quantity: "",
  wireCoaxQuantity: "",
  wireFiberQuantity: "",
  wireSpeakerQuantity: "",
  wireOtherQuantity: "",
  conduitLocation: "",

  //question 7 (Controls)
  controlSystem: false,
  iPad: false,
  keypad: false,
  factoryRemotes: false,
  otherTvControls: "",

  //question 8 (Dist. or Local Sources)
  distributedSources: false,
  localSources: false,
  dedicatedSourcesInRack: false,
  otherSources: "",

  //question 9 (Volume questions)
  tvSourcesTvAudio: false,
  tvSourcesOverheadAudio: false,

  //question 10 (Audio Zone Questions)
  existingSpeakers: false,
  newSpeakers: false,

  inCeilingSpeakers: false,
  inWallSpeakers: false,
  bookShelfSpeakers: false,
  towerSpeakers: false,

  subInWall: false,
  subPowered: "",

  //questions 41-50 (Audio Info)

  roomNotes: ""
};
export default initialState;