import { AxiosResponse } from "axios";
import $api from "../http";
import { RoomResponse } from "../models/response/room-response";

export default class RoomsService {
  static async getRoomsDormitries(
    domitoryId: number,
    page: number
  ): Promise<AxiosResponse<RoomResponse[]>> {
    return $api.post<RoomResponse[]>(`/dormitory/${domitoryId}/rooms`, {
      page,
    });
  }
}
