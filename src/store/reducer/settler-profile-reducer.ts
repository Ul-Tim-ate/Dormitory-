import { ISettler } from "../../models/settler";
import { SettlerProfileActions } from "../../types/actions/settler-profile-actions";

const initialState = {
  settler: {} as ISettler,
  getSettler: false,
};

const settlerProfileReducer = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case SettlerProfileActions.SET_SETTLER:
      return {
        ...state,
        settler: payload,
        getSettler: true,
      };
    case SettlerProfileActions.DUMP_SETTLER:
      return {
        ...state,
        settler: {} as ISettler,
        getSettler: false,
      };
    default:
      return state;
  }
};

export default settlerProfileReducer;
