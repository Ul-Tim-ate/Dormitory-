import axios from "axios";
import { AuthResponse } from "../models/response/auth-response";

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
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.jwt.access);
        return $api.request(originalRequest);
      } catch (e) {
        console.log("НЕ АВТОРИЗОВАН");
      }
    }
    throw error;
  }
);

export default $api;
