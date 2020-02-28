import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

//Local Storage browser in Browser
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import equipmentReducer from "./equipment/equipment.reducer";
import houseReducer from "./room/room.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "house"]
};

const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
  house: houseReducer,
  equipment: equipmentReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
