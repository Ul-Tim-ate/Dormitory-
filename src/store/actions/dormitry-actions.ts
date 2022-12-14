import { IDormitry } from "../../models/dormitry";
import { DormitryActionsTypes } from "../../types/dormity-action";

export const getUserDormitriesAction = () => {
  return { type: DormitryActionsTypes.GET_USER_DORMITRIES };
};

export const setUserDormitriesAction = (dormitories: IDormitry[]) => {
  return {
    type: DormitryActionsTypes.SET_USER_DORMITRIES,
    payload: dormitories,
  };
};
