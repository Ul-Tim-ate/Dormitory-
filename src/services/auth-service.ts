import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/auth-response";
import { AuthRegistration } from "../types/auth-actions";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/auth", { email, password });
  }

  static async registration(
    user: AuthRegistration
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/auth/register", {
      ...user,
    });
  }

  static async getUser(): Promise<AxiosResponse<AuthResponse>> {
    return $api.get<AuthResponse>("/auth/users");
  }
}
