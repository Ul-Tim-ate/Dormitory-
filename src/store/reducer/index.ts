import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import dormitryReducer from "./dormitry-reducer";
import settlersReducer from "./settlers-reducer";

const rootReducer = combineReducers({
  authReducer,
  dormitryReducer,
  settlersReducer,
});

export default rootReducer;
