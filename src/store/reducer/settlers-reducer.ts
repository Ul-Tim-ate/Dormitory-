import { IDormitry } from "../../models/dormitry";
import { ISettler } from "../../models/settler";
import { DormitryActionsTypes } from "../../types/actions/dormity-action";
import { SettlerActionsTypes } from "../../types/actions/settler-action";

const initialState = {
  settlers: [] as ISettler[],
  getSettlers: false,
};

const settlersReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SettlerActionsTypes.FETCH_SETTLERS:
      return {
        ...state,
        getSettlers: false,
      };
    case SettlerActionsTypes.SET_SETTLERS:
      return {
        ...state,
        settlers: [...payload],
        getSettlers: true,
      };
    case SettlerActionsTypes.ADD_SETTLERS:
      return {
        ...state,
        getSettlers: false,
      };
    case SettlerActionsTypes.LOGOUT:
      return {
        ...state,
        settlers: [],
        getSettlers: false,
      };
    default:
      return state;
  }
};

export default settlersReducer;
