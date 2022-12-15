export interface DormitoriesResponse {
  dormitories: Dormitory[];
}

export interface DormitoryResponse {
  dormitory: Dormitory;
}

export interface Dormitory {
  id: number;
  address: string;
  floors_count: number;
  rooms_on_floor_count: number;
  places_in_room_count: number;
  university_info: string;
  busy_places: number;
}
