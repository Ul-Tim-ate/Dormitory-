export interface RoomResponse {
  rooms: {
    id: number;
    room_number: number;
    floor: number;
    free_places: number;
    dormitory: string;
  }[];
}
