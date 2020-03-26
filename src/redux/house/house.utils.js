export const addRoomToRooms = (rooms, roomNameToAdd) => {
  const existingRoomName = rooms.find(
    roomName => roomName.id === roomNameToAdd.id
  );

  if (existingRoomName) {
    return alert(
      "Room is already in the project, please type in a different name"
    );
  }
  return [...rooms, { ...roomNameToAdd }];
};
