import { IUser } from "../../models/user";
import { AuthActionsTypes } from "../../types/actions/auth-actions";
import { AuthUser } from "../../types/auth-user";

const initialState = {
  user: {} as AuthUser,
  failedAuth: false,
};

const authReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case AuthActionsTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          isAuth: true,
          authUser: {
            id: payload.id,
            email: payload.email,
            fullname: payload.fullname,
            phone: payload.phone,
          },
        },
        failedAuth: false,
      };
    case AuthActionsTypes.LOGOUT:
      return {
        ...state,
        user: {
          isAuth: false,
          authUser: {} as IUser,
        },
        failedAuth: false,
      };
    case AuthActionsTypes.LOGIN_FAILED:
      return {
        ...state,
        failedAuth: true,
      };
    default:
      return state;
  }
};

export default authReducer;
