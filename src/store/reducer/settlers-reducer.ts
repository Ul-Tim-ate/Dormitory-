import { IDormitry } from "../../models/dormitry";
import { ISettler } from "../../models/settler";
import { DormitryActionsTypes } from "../../types/dormity-action";
import { SettlerActionsTypes } from "../../types/settler-action";

const initialState = {
  settlers: [] as ISettler[],
};

const settlersReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SettlerActionsTypes.SET_SETTLERS:
      return {
        ...state,
        settlers: [...payload],
      };
    case SettlerActionsTypes.SET_SETTLERS:
      return {
        ...state,
        settlers: [...payload],
      };
    case SettlerActionsTypes.LOGOUT:
      return {
        ...state,
        settlers: [],
      };
    default:
      return state;
  }
};

export default settlersReducer;
