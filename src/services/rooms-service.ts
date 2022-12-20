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

  static async getRoom(
    domitoryId: number,
    roomNumber: number
  ): Promise<AxiosResponse<RoomResponse[]>> {
    return $api.get<RoomResponse[]>(
      `/dormitory/${domitoryId}/rooms/${roomNumber}`
    );
  }
}
