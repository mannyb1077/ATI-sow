import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// Adds items in Carts
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (acumulatedQuantity, cartItem) => acumulatedQuantity + cartItem.quantity,
      0
    )
);

// Gives you Grand Total at job summary if using Prices per unit
export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (acumulatedQuantity, cartItem) =>
      acumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
