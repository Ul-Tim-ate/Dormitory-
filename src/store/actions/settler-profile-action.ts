import { ISettler } from "../../models/settler";
import { SettlerProfileActions } from "../../types/actions/settler-profile-actions";

export const getSettlerProfileAction = (
  dormitoryId: number,
  settlerId: number
) => {
  return {
    type: SettlerProfileActions.GET_SETTLER,
    payload: { dormitoryId, settlerId },
  };
};

export const setSettlerProfileAction = (settler: ISettler) => {
  return {
    type: SettlerProfileActions.SET_SETTLER,
    payload: { ...settler },
  };
};

export const dumpSettlerProfileAction = () => {
  return {
    type: SettlerProfileActions.DUMP_SETTLER,
  };
};

export const deleteSettlerProfileAction = (
  dormitoryId: number,
  settlerId: number
) => {
  return {
    type: SettlerProfileActions.DELETE_SETTLER,
    payload: { dormitoryId, settlerId },
  };
};
