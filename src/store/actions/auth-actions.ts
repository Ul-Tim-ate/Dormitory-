import { AuthActionsTypes, AuthLogin } from "../../types/auth-actions";

export const authLoginAction = (email: string, password: string) => {
  const payload: AuthLogin = { email, password };
  return { type: AuthActionsTypes.LOGIN, payload };
};
