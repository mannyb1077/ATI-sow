export const addRoomToRooms = (rooms, roomNameToAdd) => {
  const existingRoomName = rooms.find(
    roomName => roomName.id === roomNameToAdd.id
  );

  if (existingRoomName) {
    return rooms.map(roomName =>
      roomName.uuid === roomNameToAdd.uuid ? { ...roomName } : roomName
    );
  }
  console.log(roomNameToAdd);
  return [...rooms, { ...roomNameToAdd }];
};
