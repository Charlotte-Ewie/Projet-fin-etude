import { combineReducers } from "redux";

import user from "./user";
import animal from "./animal";
import reminder from "./reminder"

const rootReducer = combineReducers({
  user,
  animal,
  reminder,
});

export default rootReducer;
