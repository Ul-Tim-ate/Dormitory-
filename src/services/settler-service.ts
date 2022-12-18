import { AxiosResponse } from "axios";
import $api from "../http";
import { SettlerProfileResponse } from "../models/response/settler-profile-response";
import { SettlerResponse } from "../models/response/settlers-response";
import { ISettler } from "../models/settler";

export default class SettlersService {
  static async getDormitorySettlers(
    id: number
  ): Promise<AxiosResponse<SettlerResponse[]>> {
    return $api.get<SettlerResponse[]>(`/dormitory/${id}/settlers`);
  }

  static async addSettlerToDormitory(
    settler: ISettler,
    id: number
  ): Promise<AxiosResponse<SettlerResponse[]>> {
    return $api.post<SettlerResponse[]>(`/dormitory/${id}/settlers`, {
      ...settler,
    });
  }

  static async geSettlerProfile(
    dormitoryId: number,
    setterId: number
  ): Promise<AxiosResponse<SettlerProfileResponse>> {
    return $api.get<SettlerProfileResponse>(
      `/dormitory/${dormitoryId}/settlers/${setterId}`
    );
  }
}
