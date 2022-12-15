import { SettlerActionsTypes } from "../../types/settler-action";

export const fetchSettlersAction = (id: number) => {
  return { type: SettlerActionsTypes.FETCH_SETTLERS, payload: id };
};
