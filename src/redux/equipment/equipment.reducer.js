import EQUIPMENT_DATA from "./equipment.data";

const INITIAL_STATE = {
  collections: EQUIPMENT_DATA
};

const equipmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default equipmentReducer;
