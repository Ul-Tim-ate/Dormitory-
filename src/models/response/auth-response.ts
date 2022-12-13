import { IJwt } from "../jwt";
import { IUser } from "../user";

export interface AuthResponse {
  jwt: IJwt;
  user: IUser;
}
