import { IUser } from "../../models/user";
import { AuthActionsTypes } from "../../types/auth-actions";

const initialState = {
  user: {} as IUser,
  isAuth: false,
};

const authReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case AuthActionsTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          id: payload.id,
          email: payload.email,
          fullname: payload.fullName,
          phone: payload.phone,
        },
        isAuth: true,
      };

    case AuthActionsTypes.LOGIN_FAILED:
      return state;
    default:
      return state;
  }
};

export default authReducer;
