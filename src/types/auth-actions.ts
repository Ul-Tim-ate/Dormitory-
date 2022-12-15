export enum AuthActionsTypes {
  LOGIN = "LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILED = "LOGIN_FAILED",
  LOGOUT = "LOGOUT",
  REGISTRATION = "REGISTRATION",
}

export interface AuthLogin {
  email: string;
  password: string;
}

export interface AuthRegistration {
  email: string;
  password: string;
  fullname: string;
  phone: string;
}

export interface LoginActionType {
  type: string;
  payload: AuthLogin;
}

export interface RegistActionType {
  type: string;
  payload: AuthRegistration;
}