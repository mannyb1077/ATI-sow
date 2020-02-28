import { createSelector } from "reselect";

const selectUser = state => state.user;
const selectCart = state => state.cart;
//const selectHouse = state => state.house;

export const selectCurrentUser = createSelector(
  selectUser,
  selectCart,
  //selectHouse,
  user => user.currentUser
);
