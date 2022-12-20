import { IRoom } from "./room";
import { IStudent } from "./student";

export interface RoomProfile {
  room: IRoom;
  students: IStudent[];
}
