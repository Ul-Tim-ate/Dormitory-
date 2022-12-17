import { IStudent } from "../../models/student";
import { StudentsActionsTypes } from "../../types/actions/students-action";

export const fetchStudentsAction = (id: number) => {
  return { type: StudentsActionsTypes.FETCH_STUDENTS, payload: id };
};
export const setStudentsAction = (students: IStudent[]) => {
  return { type: StudentsActionsTypes.SET_STUDENTS, payload: students };
};
