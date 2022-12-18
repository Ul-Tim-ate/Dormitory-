export interface StudentsResponse {
  students: {
    id: number;
    fullname: string;
    email: string;
    phone: string;
    flg: true;
    room: string;
  }[];
}
