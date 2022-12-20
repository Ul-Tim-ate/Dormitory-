import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import dormitryReducer from "./dormitry-reducer";
import roomProfileReducer from "./room-profile-reducer";
import roomsReducer from "./rooms-reducer";
import settlerProfileReducer from "./settler-profile-reducer";
import settlersReducer from "./settlers-reducer";
import studentProfileReducer from "./student-profile-reducer";
import studentsReducer from "./students-reducer";

const rootReducer = combineReducers({
  authReducer,
  dormitryReducer,
  settlersReducer,
  studentsReducer,
  settlerProfileReducer,
  roomsReducer,
  studentProfileReducer,
  roomProfileReducer,
});

export default rootReducer;
