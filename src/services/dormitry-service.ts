import { AxiosResponse } from "axios";
import $api from "../http";
import { DormitryResponse } from "../models/response/dormitry-response";

export default class DormitryService {
  static async getUserDormitries(): Promise<AxiosResponse<DormitryResponse>> {
    return $api.get<DormitryResponse>("/dormitory");
  }
}
