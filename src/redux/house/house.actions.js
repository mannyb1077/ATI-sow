import RoomActionTypes from "./house.types";

export const addRoom = room => ({
  type: RoomActionTypes.ADD_ROOM,
  payload: room
});

export const deleteRoom = room => ({
  type: RoomActionTypes.DELETE_ROOM,
  payload: room
});

export const deleteAll = room => ({
  type: RoomActionTypes.DELETE_ALL,
  payload: room
});
