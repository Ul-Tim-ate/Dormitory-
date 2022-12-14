import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import dormitryReducer from "./dormitry-reducer";

const rootReducer = combineReducers({
  authReducer,
  dormitryReducer,
});

export default rootReducer;
