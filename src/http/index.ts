import axios from "axios";
import { AuthResponse } from "../models/response/auth-response";
import { RefreshResponse } from "../models/response/refresh-response";
import { ErrorsMesage } from "../types/errors";

export const API_URL = `https://ezhneesh.pythonanywhere.com/api`;

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  if (!config?.headers) {
    throw new Error(
      `Expected 'config' and 'config.headers' not to be undefined`
    );
  }
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post<RefreshResponse>(
          `${API_URL}/auth/refresh`,
          {
            refresh: localStorage.getItem("refreshToken"),
          }
        );
        localStorage.setItem("token", response.data.access);
        return $api.request(originalRequest);
      } catch (e) {
        throw new Error(ErrorsMesage.NO_ACCESS);
      }
    }
    // throw error;
  }
);

export default $api;
