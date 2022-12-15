import { IDormitry } from "../../models/dormitry";
import { DormitryActionsTypes } from "../../types/dormity-action";

const initialState = {
  dormitories: [] as IDormitry[],
};

const dormitryReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case DormitryActionsTypes.SET_USER_DORMITRIES:
      return {
        ...state,
        dormitories: payload,
      };
    case DormitryActionsTypes.SET_ADDED_USER_DORMITRY:
      console.log("state", state.dormitories);
      console.log("payload", payload);
      return {
        dormitories: [...state.dormitories, payload],
      };
    default:
      return state;
  }
};

export default dormitryReducer;
