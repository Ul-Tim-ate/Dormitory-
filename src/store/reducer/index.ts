import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import dormitryReducer from "./dormitry-reducer";
import settlerProfileReducer from "./settler-profile-reducer";
import settlersReducer from "./settlers-reducer";
import studentsReducer from "./students-reducer";

const rootReducer = combineReducers({
  authReducer,
  dormitryReducer,
  settlersReducer,
  studentsReducer,
  settlerProfileReducer,
});

export default rootReducer;
