import { IDormitry } from "../../models/dormitry";
import { Dormitory } from "../../models/response/dormitry-response";
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

export const addUserDormitoryAction = (dormitories: Dormitory) => {
  return {
    type: DormitryActionsTypes.ADD_USER_DORMITRY,
    payload: dormitories,
  };
};

export const setAddedUserDormitoryAction = (dormitories: IDormitry) => {
  return {
    type: DormitryActionsTypes.SET_ADDED_USER_DORMITRY,
    payload: dormitories,
  };
};
