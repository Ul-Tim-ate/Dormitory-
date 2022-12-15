import { AxiosResponse } from "axios";
import $api from "../http";
import {
  DormitoriesResponse,
  Dormitory,
  DormitoryResponse,
} from "../models/response/dormitry-response";

export default class DormitryService {
  static async getUserDormitries(): Promise<
    AxiosResponse<DormitoriesResponse>
  > {
    return $api.get<DormitoriesResponse>("/dormitory");
  }

  static async addUserDormitry(
    dormitory: Dormitory
  ): Promise<AxiosResponse<DormitoryResponse>> {
    console.log({ ...dormitory });

    return $api.post<DormitoryResponse>("/dormitory", { ...dormitory });
  }
}
