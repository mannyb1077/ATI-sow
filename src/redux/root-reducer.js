import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

//Local Storage browser in Browser
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import equipmentReducer from "./equipment/equipment.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  equipment: equipmentReducer
});

export default persistReducer(persistConfig, rootReducer);
