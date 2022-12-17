import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import dormitryReducer from "./dormitry-reducer";
import settlersReducer from "./settlers-reducer";
import studentsReducer from "./students-reducer";

const rootReducer = combineReducers({
  authReducer,
  dormitryReducer,
  settlersReducer,
  studentsReducer,
});

export default rootReducer;
