import { AxiosResponse } from "axios";
import $api from "../http";
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
}
