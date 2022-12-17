import { IUser } from "../../models/user";
import {
  AuthActionsTypes,
  AuthLogin,
  AuthRegistration,
} from "../../types/auth-actions";

export const authLoginAction = (email: string, password: string) => {
  const payload: AuthLogin = { email, password };
  return { type: AuthActionsTypes.LOGIN, payload };
};

export const authLoginSuccessAction = (user: IUser) => {
  return { type: AuthActionsTypes.LOGIN_SUCCESS, payload: user };
};

export const authLogoutAction = () => {
  return { type: AuthActionsTypes.LOGOUT };
};

export const authRegistrationAction = (user: AuthRegistration) => {
  return { type: AuthActionsTypes.REGISTRATION, payload: user };
};

export const authGetUserAction = () => {
  return { type: AuthActionsTypes.GET_USER };
};

export const authLoginFailedAction = () => {  
  return { type: AuthActionsTypes.LOGIN_FAILED };
};