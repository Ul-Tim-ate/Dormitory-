import { AxiosResponse } from "axios";
import $api from "../http";
import { SettlerResponse } from "../models/response/settlers-response";

export default class SettlersService {
  static async getDormitorySettlers(id: number): Promise<
    AxiosResponse<SettlerResponse[]>
  > {
    return $api.get<SettlerResponse[]>(`/dormitory/${id}/settlers`);
  }
}
