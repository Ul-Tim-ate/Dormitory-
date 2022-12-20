import { IStudent } from "../../models/student";
import { StudentsActionsTypes } from "../../types/actions/students-action";

export const fetchStudentsAction = (id: number) => {
  return { type: StudentsActionsTypes.FETCH_STUDENTS, payload: id };
};
export const setStudentsAction = (students: IStudent[]) => {
  return { type: StudentsActionsTypes.SET_STUDENTS, payload: students };
};

export const deleteStudentAction = (student: IStudent) => {
  return { type: StudentsActionsTypes.DELETE_STUDENT, payload: student.id };
};

export const addStudentAction = (student: IStudent) => {
  return { type: StudentsActionsTypes.ADD_STUDENT, payload: student };
};
