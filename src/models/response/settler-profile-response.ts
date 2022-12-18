export interface SettlerProfileResponse {
  settler: {
    id: number;
    fullname: string;
    email: string;
    phone: string;
    flg: boolean;
  };
}
