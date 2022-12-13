import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/auth-response";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/auth", { email, password });
  }

  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/auth/users", { email, password });
  }

  static async logout(): Promise<void> {
    return $api.post("/logout");
  }
}
