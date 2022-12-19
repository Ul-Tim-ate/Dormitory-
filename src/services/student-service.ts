import { AxiosResponse } from "axios";
import $api from "../http";
import { StudentsResponse } from "../models/response/students-response";

export default class StudentsService {
  static async getDormitoryStudents(
    id: number
  ): Promise<AxiosResponse<StudentsResponse>> {
    return $api.get<StudentsResponse>(`/dormitory/${id}/students`);
  }

  static async getStudentProfile(
    dormitoryId: number,
    studentId: number
  ): Promise<AxiosResponse<StudentsResponse>> {
    return $api.get<StudentsResponse>(
      `/dormitory/${dormitoryId}/students/${studentId}`
    );
  }
}
