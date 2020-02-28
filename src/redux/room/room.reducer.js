import RoomActionTypes from "./room.types";
import { addRoomToRooms, addRoomToRoomsHouse } from "./room.utils";
import uuid from "uuid";

const INITIAL_STATE = {
  hidden: true,
  rooms: [
    {
      id: uuid(),
      roomName: "my frist room",
      equipment: [
        {
          tv: "Customer Provided"
        }
      ],
      roomNotes: ""
    }
  ]
};

const houseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RoomActionTypes.ADD_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, action.payload]
      };

    default:
      return state;
  }
};
export default houseReducer;
