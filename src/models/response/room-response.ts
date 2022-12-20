export interface RoomResponse {
  rooms: {
    id: number;
    room_number: number;
    floor: number;
    free_places: number;
    places: number;
    dormitory: string;
  }[];
}

export interface RoomProfileResponse {
  room: {
    id: number;
    room_number: number;
    floor: number;
    free_places: number;
    places: number;
    dormitory: string;
  };
}
