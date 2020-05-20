import { createSelector } from "reselect";

const selectHouse = (state) => state.house;

export const selectRooms = createSelector(
  [selectHouse],
  (house) => house.rooms
);

export const selectRoomsForPreview = createSelector([selectRooms], (rooms) =>
  Object.keys(rooms).map((key) => rooms[key])
);

export const selectRoomName = (roomsUrlParam) =>
  createSelector([selectRooms], (rooms) => rooms[roomsUrlParam]);

// Adds all rooms in Cart
export const selectRoomsCount = createSelector([selectRooms], (rooms) =>
  rooms.reduce(
    (acumulatedQuantity, room) => acumulatedQuantity + room.quantity,
    0
  )
);
