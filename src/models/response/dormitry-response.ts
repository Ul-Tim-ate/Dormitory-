export interface DormitryResponse {
  dormitories: Dormitry[];
}

interface Dormitry {
  address: string;
  floors_count: number;
  rooms_on_floor_count: number;
  places_in_room_count: number;
  university_info: string;
  busy_places: number;
}
