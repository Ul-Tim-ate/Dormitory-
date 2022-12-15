export interface DormitryResponse {
  dormitories: Dormitry[];
}

interface Dormitry {
  id: number;
  address: string;
  floors_count: number;
  rooms_on_floor_count: number;
  places_in_room_count: number;
  university_info: string;
  busy_places: number;
}
