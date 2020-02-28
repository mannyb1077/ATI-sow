import RoomActionTypes from "./room.types";

export const addRoom = room => ({
  type: RoomActionTypes.ADD_ROOM,
  payload: room
});
