import { createSelector } from "reselect";
import uuid from "uuid";

const selectHouse = state => state.house;

export const selectRooms = createSelector([selectHouse], house => house.rooms);

export const selectRoomsForPreview = createSelector([selectRooms], rooms =>
  Object.keys(uuid()).map(key => rooms[uuid()])
);

export const selectRoomName = collectionUrlParam =>
  createSelector([selectRooms], rooms => rooms[collectionUrlParam]);

export const selectRoomsCount = createSelector([selectRooms], rooms =>
  rooms.reduce(
    (acumulatedQuantity, roomName) => acumulatedQuantity + roomName.quantity,
    0
  )
);
