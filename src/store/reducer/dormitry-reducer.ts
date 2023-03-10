import { IDormitry } from "../../models/dormitry";
import { DormitryActionsTypes } from "../../types/actions/dormity-action";

const initialState = {
  dormitories: [] as IDormitry[],
  getDormitories: false,
};

const dormitryReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case DormitryActionsTypes.SET_USER_DORMITRIES:
      return {
        ...state,
        dormitories: payload,
        getDormitories: true,
      };
    case DormitryActionsTypes.SET_ADDED_USER_DORMITRY:
      return {
        ...state,
        dormitories: [...state.dormitories, payload],
        getDormitories: true,
      };
    case DormitryActionsTypes.ADD_USER_DORMITRY:
      return {
        ...state,
        getDormitories: false,
      };
    case DormitryActionsTypes.LOGOUT:
      return {
        dormitories: [],
        getDormitories: false,
      };

    default:
      return state;
  }
};

export default dormitryReducer;
