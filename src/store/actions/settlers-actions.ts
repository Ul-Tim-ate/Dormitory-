import { ISettler, NewSettler } from "../../models/settler";
import { SettlerActionsTypes } from "../../types/actions/settler-action";

export const fetchSettlersAction = (id: number) => {
  return { type: SettlerActionsTypes.FETCH_SETTLERS, payload: id };
};

export const addSettlersAction = (settler: NewSettler, dormitoryId: number) => {
  return {
    type: SettlerActionsTypes.ADD_SETTLERS,
    payload: { settler, dormitoryId },
  };
};

export const setSettlersAction = (settlers: ISettler[]) => {
  return { type: SettlerActionsTypes.SET_SETTLERS, payload: settlers };
};
