import { AuthActionsTypes } from "../../types/auth-actions";
import { AuthUser } from "../../types/auth-user";

const initialState = {
  user: {} as AuthUser,
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
      };

    case AuthActionsTypes.LOGIN_FAILED:
      return state;
    default:
      return state;
  }
};

export default authReducer;
