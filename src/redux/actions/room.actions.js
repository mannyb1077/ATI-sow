import RoomActionTypes from "../types/room.types";

export const addRoom = room => ({
  type: RoomActionTypes.ADD_ROOM,
  payload: room
});

export const deleteRoom = id => ({
  type: RoomActionTypes.DELETE_ROOM
});
