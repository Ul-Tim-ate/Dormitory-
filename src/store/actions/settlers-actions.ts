import { ISettler } from "../../models/settler";
import { SettlerActionsTypes } from "../../types/settler-action";

export const fetchSettlersAction = (id: number) => {
  return { type: SettlerActionsTypes.FETCH_SETTLERS, payload: id };
};

export const setSettlersAction = (settlers: ISettler[]) => {
  return { type: SettlerActionsTypes.SET_SETTLERS, payload: settlers };
};
