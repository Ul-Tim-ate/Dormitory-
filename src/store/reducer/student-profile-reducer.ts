import { IStudent } from "../../models/student";
import { StudentProfileActions } from "../../types/actions/student-profile-action";

const initialState = {
  student: {} as IStudent,
  getStudent: false,
};

const studentProfileReducer = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case StudentProfileActions.SET_STUDENT:
      return {
        ...state,
        student: payload,
        getStudent: true,
      };
    case StudentProfileActions.DUMP_STUDENT:
      return {
        ...state,
        student: {} as IStudent,
        getStudent: false,
      };
    default:
      return state;
  }
};

export default studentProfileReducer;
