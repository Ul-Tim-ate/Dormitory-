import { IDormitry } from "../../models/dormitry";
import { DormitryActionsTypes } from "../../types/dormity-action";

const initialState = {
  dormitories: {} as IDormitry[],
};

const dormitryReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case DormitryActionsTypes.SET_USER_DORMITRIES:
      console.log(state);
      return {
        ...state,
        dormitories: payload,
      };
    default:
      return state;
  }
};

export default dormitryReducer;
