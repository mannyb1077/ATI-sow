import RoomActionTypes from "./house.types";
// import { addRoomToRooms } from "./house.utils";

//import uuid from "uuid";

const INITIAL_STATE = {
  rooms: [
    {
      id: 0,
      roomName: "",
    },
  ],
};

const houseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RoomActionTypes.ADD_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, action.payload],
      };
    case RoomActionTypes.DELETE_ROOM:
      return {
        ...state,
        rooms: state.rooms.filter((room) => room.id !== action.payload.id),
      };

    default:
      return state;
  }
};
export default houseReducer;
