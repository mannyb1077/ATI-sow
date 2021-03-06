const initialState = {
  question: 1,
  clientName: "",
  id: "",

  //questions 2

  roomName: "",
  roomNameId: "",

  // Pre-populated Room Names for Question 2
  // Bed1
  // Bed2
  // Bed3
  // Bed4
  // Bed5
  // GuestBed1
  // GuestBed2
  // GuestBed3
  // GuestBed4
  // GuestBed5
  // GreatRoom
  // Kitchen
  // MasterBed
  // MasterBath
  // MasterSuite
  // GuestMasterSuite
  // Office
  // Study
  // LivingRoom
  // Pantry
  // MudRoom
  // Garage
  // Entry
  // Laundry
  // Theater
  // GameRoom
  // Pool
  // Exercise
  // GameRoom

  // //question 3
  tvZone: false,
  audioZone: false,
  dataZone: false,
  cameraZone: false,
  projectorZone: false,

  //question 4 (TV Questions)
  customerProvidedTV: false,
  newTV: false,

  customerProvidedTvMount: false,
  newTvMount: false,
  mountTvStand: false,
  mountTvLift: false,
  mountOther: "",

  tvLiftType: "",
  backBox: false,
  tvPocket: false,

  //questions 5 (TV Specs)
  tvBrand: "",
  tvModel: "",
  tvSize: "",
  pocketSize: "",

  // Mount Type (Q6)
  mountFlat: false,
  mountTilt: false,
  mountArticulating: false,

  // Pocket (Q7)
  pocketMountOnly: false,
  pocketTvInside: false,
  pocketWidth: "",
  pocketHeight: "",
  pocketDepth: "",

  //Wire Type (Q8)
  atiRtv: false,
  atiFiberRtv: false,
  atiRtvWithSounbar: false,
  wireC5Quantity: "",
  wireC6Quantity: "",
  wireCoaxQuantity: "",
  wireFiberQuantity: "",
  wireSpeakerQuantity: "",
  wireOtherQuantity: "",
  conduitLocation: "",

  //Controls(Q9)
  controlSystem: false,
  iPad: false,
  keypad: false,
  factoryRemotes: false,
  otherTvControls: "",

  //Dist. or Local Sources(Q10)
  distributedSources: false,
  localSources: false,
  dedicatedSourcesInRack: false,
  otherSources: "",

  //Volume questions(Q11))
  tvSourcesTvAudio: false,
  tvSourcesOverheadAudio: false,
  tvSourcesLocalSoundbar: false,

  //Audio Zone Questions(Q12)
  existingSpeakers: false,
  newSpeakers: false,

  inCeilingSpeakers: false,
  inWallSpeakers: false,
  bookShelfSpeakers: false,
  towerSpeakers: false,
  surroundSpeakers: false,
  soundbar: false,
  dosSpeakers: false,

  subInWall: false,
  subPowered: "",
  dosSub: false,

  //Audio Sources(Q13))
  distributedAudio: false,
  dedicatedAudioSource: false,
  audioSourceOther: "",

  audioKeypad: false,
  audioTouchPanel: false,
  audioIphone: false,

  //Phone/Data Location(Q14)
  phoneLocation: false,
  dataLocation: false,

  apLocation: false,
  apPowerLocation: false,

  //Camera Location(Q15)

  cameraLocation: false,
  cameraBullet: false,
  cameraDome: false,
  cameraPTZ: false,
  cameraAnalog: false,
  cameraIP: false,
  cameraNest: false,
  cameraRing: false,
  cameraNestDoorbell: false,
  cameraRingDoorbell: false,
  otherCloudCamera: "",
  cameraWire: "",
  cameraPower: false,

  //projector Specs(Q16)
  projectorNew: false,
  projectorCustomerProvided: false,

  projectorMountNew: false,
  projectorMountCP: false,

  projectorBrand: "",
  projectorModel: "",
  projectorIr: false,
  projectorRs232: false,
  projectorIP: false,
  projectorDrop: "",
  projectorNotes: "",

  //Screen Details(Q17)
  screenNew: false,
  screenCustomerProvided: false,

  screenPerforated: false,
  screenLightRejection: false,
  screenFixed: false,
  screenMotorized: false,

  screenGain: "",
  screenSize: "",
  screenWidth: "",
  screenHeight: "",
  throwDistance: "",

  //Room Notes (Q18)
  roomNotes: "",
};

export default initialState;
