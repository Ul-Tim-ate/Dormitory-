import { IDormitry } from "../../models/dormitry";
import { IStudent } from "../../models/student";
import { DormitryActionsTypes } from "../../types/actions/dormity-action";
import { StudentsActionsTypes } from "../../types/actions/students-action";

const initialState = {
  students: [] as IStudent[],
  getStudents: false,
};

const studentsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case StudentsActionsTypes.SET_STUDENTS:
      return {
        ...state,
        students: payload,
        getStudents: true,
      };
    case StudentsActionsTypes.LOGOUT:
      return {
        ...state,
        getStudents: false,
        students: [],
      };
    case StudentsActionsTypes.DELETE_STUDENT:
      console.log(payload);
      const newState = state.students.filter((el) => {
        return el.id !== payload.studentId;
      });
      return {
        ...state,
        students: newState,
      };
    case StudentsActionsTypes.ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, { ...payload }],
      };
    default:
      return state;
  }
};

export default studentsReducer;
