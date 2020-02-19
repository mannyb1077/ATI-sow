export const addRoomToCart = (cartRooms, cartRoomToAdd) => {
  const existingCartRoom = cartRooms.find(
    cartRoom => cartRoom.id === cartRoomToAdd.id
  );

  if (existingCartRoom) {
    return cartRooms.map(cartRoom =>
      cartRoom.id === cartRoomToAdd.id
        ? { ...cartRoom, quantity: cartRoom.quantity + 1 }
        : cartRoom
    );
  }

  return [...cartRooms, { ...cartRoomToAdd, quantity: 1 }];
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
