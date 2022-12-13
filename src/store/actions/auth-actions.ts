import { IUser } from "../../models/user";
import { AuthActionsTypes, AuthLogin } from "../../types/auth-actions";

export const authLoginAction = (email: string, password: string) => {
  const payload: AuthLogin = { email, password };
  return { type: AuthActionsTypes.LOGIN, payload };
};

export const authLoginSuccessAction = (user: IUser) => {
  return { type: AuthActionsTypes.LOGIN_SUCCESS, payload: user };
};
