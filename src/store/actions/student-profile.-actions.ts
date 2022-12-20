import { IStudent } from "../../models/student";
import { StudentProfileActions } from "../../types/actions/student-profile-action";

export const getStudentProfileAction = (
  dormitoryId: number,
  studentId: number
) => {
  return {
    type: StudentProfileActions.GET_STUDENT,
    payload: { dormitoryId, studentId },
  };
};

export const setStudentProfileAction = (student: IStudent) => {
  return {
    type: StudentProfileActions.SET_STUDENT,
    payload: { ...student },
  };
};

export const resellteStudentProfileAction = (
  student: IStudent,
  dormitoryId: number
) => {
  return {
    type: StudentProfileActions.CHANGE_STUDENT,
    payload: { dormitoryId, student },
  };
};

export const dumpStudentProfileAction = () => {
  return {
    type: StudentProfileActions.DUMP_STUDENT,
  };
};

export const deleteStudentProfileAction = (
  dormitoryId: number,
  studentId: number
) => {
  return {
    type: StudentProfileActions.DELETE_STUDENT,
    payload: { dormitoryId, studentId },
  };
};
