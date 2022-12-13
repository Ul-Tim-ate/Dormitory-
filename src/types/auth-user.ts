import { IUser } from "../models/user";

export interface AuthUser {
  authUser: IUser;
  isAuth: boolean;
}
